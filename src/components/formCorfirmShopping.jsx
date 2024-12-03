import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import Button from './generals/button'

const FormConfirm = () => {

    const [data, setData] = useState({});
    const cart = useSelector(state => state.cart.items)

    const name = useRef();
    const movil = useRef();
    const city = useRef();
    const adress = useRef();
    const postCode = useRef()
    const email = useRef();

    const handleData = () => {
        setData({
            customer:{
                name: name.current.name,
                movil: movil.current.movil,
                city: city.current.city,
                adress: adress.current.adress,
                postCode: postCode.current.postCode,
                email: email.current.email
            },
            items: cart
        }),
        console.log(data)
    }

    const inputClass="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"

    return(
        <div className="font-josefin px-6 py-4 bg-white rounded-md shadow-md max-w-xl mx-auto">
            <h2 className="font-bold text-xl text-gray-800 text-center mb-4">
                TU PEDIDO CASI ESTA LISTO. PARA COMPLETARLO, INGRESA TUS DATOS y ENVIALO!
            </h2>
            <form className='space-y-4'>
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
                <Button 
                onClick={handleData}
                classes="cardButton">ENVIAR PEDIDO</Button>
                </div>
            </form>
        </div>
    );
}

export default FormConfirm;