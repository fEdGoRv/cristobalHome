import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import Button from './generals/button'
import { cartActions } from '../store/cartSlice';

const FormConfirm = () => {

    const [data, setData] = useState({});
    const cart = useSelector(state => state.cart.items)
    const dispatch = useDispatch();

    const name = useRef();
    const movil = useRef();
    const city = useRef();
    const adress = useRef();
    const postCode = useRef()
    const email = useRef();

    const handleData = () => {
        const formData = {
            customer:{
                name: name.current.value,
                movil: movil.current.value,
                city: city.current.value,
                adress: adress.current.value,
                postCode: postCode.current.value,
                email: email.current.value
            },
            items: cart
        };

        setData(formData);
        console.log(formData);
    }

    const clearForm = () => {
        name.current.value = "";
        movil.current.value = "";
        city.current.value = "";
        adress.current.value = "";
        postCode.current.value = "";
        email.current.value = "";
    }

    const inputClass="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"

    return(
        <div className="font-josefin px-6 py-4 bg-white rounded-md shadow-md max-w-xl mx-auto">
            <h2 className="font-bold text-xl text-gray-800 text-center mb-4">
                TU PEDIDO CASI ESTA LISTO. PARA COMPLETARLO, INGRESA TUS DATOS y ENVIALO!
            </h2>
            <form 
            className='space-y-4'
            onSubmit={(e) => {
                e.preventDefault(); 
                handleData();
                clearForm();
                dispatch(cartActions.clearCart()); 
            }}
            >
                <div>
                    <label 
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    >Nombre y Apellido</label>
                    <input 
                    id="name"
                    type="text"
                    ref={name}
                    required
                    className={inputClass}
                    />
                </div>
                <div>
                    <label 
                    htmlFor="movil"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    >Telefono</label>
                    <input 
                    id="movil"
                    type="number"
                    ref={movil}
                    required
                    className={inputClass}
                     />
                </div>
                <div>
                    <label 
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    >Ciudad</label>
                    <input 
                    id="city" 
                    type="text" 
                    ref={city}
                    required
                    className={inputClass}
                    />
                </div>
                <div>
                    <label 
                    htmlFor="adress"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    >Dirección</label>
                    <input 
                    id="adress" 
                    type="text"
                    ref={adress}
                    required
                    className={inputClass} 
                    />
                </div>
                <div>
                    <label 
                    htmlFor="postCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    >Codigo Postal</label>
                    <input
                    id="postCode" 
                    type="number"
                    ref={postCode}
                    required
                    className={inputClass}
                    />
                </div>
                <div>
                    <label 
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    >Email</label>
                    <input 
                    id="email" 
                    type="text" 
                    ref={email}
                    required
                    className={inputClass}
                    />
                </div>
                <div className='flex items-center justify-center h-24 w-full '>
                <Button classes="cardButton">ENVIAR PEDIDO</Button>
                </div>
            </form>
        </div>
    );
}

export default FormConfirm;