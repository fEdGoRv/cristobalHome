import { useDispatch, useSelector } from "react-redux";
import cart from "../util/icons/icons8-carrito-de-compras-24.png";

import Button from "./button";
import { modalActions } from "../store/modalSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Import for dropdown functionality

export default function Header() {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openModal = () => {
        dispatch(modalActions.openModalHandler());
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return <>
        <div className="flex bg-stone-700 ">
            <div className="w-full">
                <h1 className="min-h-4 p-2 text-white text-2xl">
                    Todo decoración en chapa!
                </h1>
            </div>
            <div>
                <Button onClick={openModal}>
                    <span className="flex text-black">
                        <div className="pr-2">{totalQuantity > 0 && totalQuantity}</div>
                        <img src={cart} alt="cart/logo" />
                    </span>
                </Button>
            </div>
        </div>

        <header className="bg-white bg-opacity-5 text-white shadow-lg hidden md:block">
            <div className="container mx-auto flex items-center h-24">
                <a href="" className="flex items-center justify-center">
                    <img className="h-16" src="/pinchos/cristobal logo.jpg" alt="" />
                </a>
                <nav className="contents font-semibold text-base lg:text-lg">
                    <ul className="mx-auto flex items-center">
                        <li className="p-5 xl:p-8">
                            <Button classes="headerButton" onClick={() => navigate("")}>
                                Home
                            </Button>
                        </li>
                        <li className="p-5 xl:p-8">
                            <Button classes="headerButton" onClick={() => navigate("/about")}>
                                Sobre Nosotros
                            </Button>
                        </li>
                        <li className="relative p-5 xl:p-8">
                            <Button classes="headerButton" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                Productos
                            </Button>
                            {dropdownOpen && (
                                <ul className="absolute max-w-48 left-0 mt-1 bg-orange-300 border-solid border-white border-2 p-2 shadow-lg rounded-md z-50">
                                    <Button classes="headerButton" onClick={() => {
                                        navigate("/categories/chapas");
                                        setDropdownOpen(false);
                                    }}>
                                        Chapas
                                    </Button>
                                    <Button classes="headerButton" onClick={() => {
                                        navigate("/categories/accesorios");
                                        setDropdownOpen(false);
                                    }}>
                                        Accesorios
                                    </Button>
                                    <Button classes="headerButton" onClick={() => {
                                        navigate("/categories/pinchos");
                                        setDropdownOpen(false);
                                    }}>
                                        Pinchos
                                    </Button>
                                    <Button classes="headerButton" onClick={() => {
                                        navigate("/categories/exteriores");
                                        setDropdownOpen(false);
                                    }}>
                                        Exteriores
                                    </Button>
                                    <Button classes="headerButton" onClick={() => {
                                        navigate("/categories/fogones");
                                        setDropdownOpen(false);
                                    }}>
                                        Fogones
                                    </Button>
                                    <Button classes="headerButton" onClick={() => {
                                        navigate("/categories/proyectos");
                                        setDropdownOpen(false);
                                    }}>
                                        Proyectos
                                    </Button>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
                <button className="border border-white rounded-full font-bold px-8 py-2">Contact me</button>
            </div>
        </header>
    </>
}
