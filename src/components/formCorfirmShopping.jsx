import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from './generals/button'
import { cartActions } from '../store/cartSlice';
import { toastifyActions } from '../store/toastifySlice';
import { modalActions } from '../store/modalSlice';

const FormConfirm = () => {

    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const inputClass = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400";

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Este campo es obligatorio.")
            .min(3, "El nombre debe tener al menos 3 caracteres."),
        movil: Yup.string()
            .required("Este campo es obligatorio.")
            .matches(/^\d{10,}$/, "El numero de telefono debe tener 10 digitos."),
        city: Yup.string().required("Este campo es obligatorio."),
        adress: Yup.string().required("Este campo es obligatotio."),
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
        adress: "",
        postCode: "",
        email: "",
    };

    const handleSubmit = (values, { resetForm }) => {
        const formData = {
            customer: values,
            items: cart,
        };
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
                        {/* Name Field */}
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

                        {/* Phone Field */}
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

                        {/* City Field */}
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

                        {/* Address Field */}
                        <div>
                            <label htmlFor="adress" className="block text-sm font-medium text-gray-700 mb-1">
                                Dirección
                            </label>
                            <Field
                                id="adress"
                                name="adress"
                                type="text"
                                className={inputClass}
                            />
                            <ErrorMessage name="adress" component="p" className="text-red-500 text-sm" />
                        </div>

                        {/* Postcode Field */}
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

                        {/* Email Field */}
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

                        {/* Submit Button */}
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