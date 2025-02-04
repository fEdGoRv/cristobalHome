import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import Button from './generals/button'
import { cartActions } from '../store/cartSlice';
import { toastifyActions } from '../store/toastifySlice';
import { modalActions } from '../store/modalSlice';

const FormConfirm = () => {

    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const emailjsPublicKey = "LX6IFJ6QnsUVb38ex";
    const serviceId = "cristobalHomePage";
    const templateId = "template_pdbm214";

    const inputClass = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400";

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Este campo es obligatorio.")
            .min(3, "El nombre debe tener al menos 3 caracteres."),
        movil: Yup.string()
            .required("Este campo es obligatorio.")
            .matches(/^\d{10,}$/, "El numero de telefono debe tener 10 digitos."),
        city: Yup.string().required("Este campo es obligatorio."),
        address: Yup.string().required("Este campo es obligatotio."),
        postCode: Yup.string()
            .required("Este campo es obligatotio.")
            .matches(/^\d+$/, "El codigo postal debe ser un numero."),
        email: Yup.string()
            .required("Este campo es obligatotio.")
            .email("Dirección de email incorrecta."),
    });

    const initialValues = {
        name: "",
        movil: "",
        city: "",
        address: "",
        postCode: "",
        email: "",
    };

    const sendEmail = (formData) => {
        emailjs
            .send(serviceId, templateId, formData, emailjsPublicKey)
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    alert("Order email sent successfully!");
                },
                (error) => {
                    console.log("Error:", error.text);
                    alert("Failed to send email.");
                }
            );
    };

    const formatCartItems = (cart) => {
        return cart.map(item => `${item.name} x ${item.quantity}`).join(", ");
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log("arriveing to handleSubmittion");
        const formData = {
            name: values.name,
            movil: values.movil,
            city: values.city,
            address: values.address,
            postCode: values.postCode,
            email: values.email,
            cartItems: formatCartItems(cart),
        };

        sendEmail(formData);
        console.log(formData);
        resetForm();
        dispatch(cartActions.clearCart());
        dispatch(toastifyActions.handleDisplayToastify("orderSend"));
        dispatch(modalActions.closeModalHandler());
    };
    return (
        <div className="font-josefin px-6 py-4 bg-white rounded-md shadow-md max-w-xl mx-auto">
            <h2 className="font-bold text-xl text-gray-800 text-center mb-4">
                TU PEDIDO CASI ESTA LISTO. PARA COMPLETARLO, INGRESA TUS DATOS y ENVIALO!
            </h2>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Nombre y Apellido
                            </label>
                            <Field
                                id="name"
                                name="name"
                                type="text"
                                className={inputClass}
                            />
                            <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <label htmlFor="movil" className="block text-sm font-medium text-gray-700 mb-1">
                                Teléfono
                            </label>
                            <Field
                                id="movil"
                                name="movil"
                                type="text"
                                className={inputClass}
                            />
                            <ErrorMessage name="movil" component="p" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                Ciudad
                            </label>
                            <Field
                                id="city"
                                name="city"
                                type="text"
                                className={inputClass}
                            />
                            <ErrorMessage name="city" component="p" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                Dirección
                            </label>
                            <Field
                                id="address"
                                name="address"
                                type="text"
                                className={inputClass}
                            />
                            <ErrorMessage name="address" component="p" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <label htmlFor="postCode" className="block text-sm font-medium text-gray-700 mb-1">
                                Código Postal
                            </label>
                            <Field
                                id="postCode"
                                name="postCode"
                                type="text"
                                className={inputClass}
                            />
                            <ErrorMessage name="postCode" component="p" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                className={inputClass}
                            />
                            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                        </div>

                        <div className="flex items-center justify-center h-24 w-full">
                            <Button classes="cardButton">ENVIAR PEDIDO</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormConfirm;