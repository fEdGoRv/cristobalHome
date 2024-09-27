import { useDispatch, useSelector } from "react-redux";
import cart from "../util/icons/icons8-carrito-de-compras-24.png";

import Button from "./button";
import { modalActions } from "../store/modalSlice";
import { useNavigate } from "react-router-dom";


export default function Header() {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(modalActions.openModalHandler());
    }
    const navigate = useNavigate();

    return <>
        <div className="flex bg-stone-700 ">
            <div className="w-full">
                <h1 className="min-h-4 p-2 text-white text-2xl">
                    Todo decoración en chapa!
                </h1>
            </div>
            <div>
                <Button onClick={openModal} >
                    <span className="flex text-black">
                        <div className="pr-2">{totalQuantity > 0 && totalQuantity}</div>
                        <img src={cart} alt="cart/logo" />
                    </span>
                </Button>
            </div>
        </div>

        <header class="bg-white bg-opacity-5 text-white shadow-lg hidden md:block">
            <div class="container mx-auto flex items-center h-24">
                <a href="" class="flex items-center justify-center">
                    <img class="h-16" src="/pinchos/cristobal logo.jpg" alt="" />
                </a>
                <nav class="contents font-semibold text-base lg:text-lg">
                    <ul class="mx-auto flex items-center">
                        <li class="p-5 xl:p-8 active">
                            <Button classes="headerButton" onClick={() => navigate("/categories/chapas")}>
                                Chapas
                            </Button>
                        </li>
                        <li class="p-5 xl:p-8">
                            <Button classes="headerButton" onClick={() => navigate("/categories/accesorios")}>
                                Accesorios
                            </Button>
                        </li>
                        <li class="p-5 xl:p-8">
                            <Button classes="headerButton" onClick={() => navigate("/categories/pinchos")}>
                                Pinchos
                            </Button>
                        </li>
                        <li class="p-5 xl:p-8">
                            <Button classes="headerButton" onClick={() => navigate("/categories/exteriores")}>
                                Exteriores
                            </Button>
                        </li>
                        <li class="p-5 xl:p-8">
                            <Button classes="headerButton" onClick={() => navigate("/categories/fogones")}>
                                Fogones
                            </Button>
                        </li>
                        <li class="p-5 xl:p-8">
                            <Button classes="headerButton" onClick={() => navigate("/categories/proyectos")}>
                                Proyectos
                            </Button>
                        </li>
                    </ul>
                </nav>
                <button class="border border-white rounded-full font-bold px-8 py-2">Contact me</button>
            </div>
        </header>
    </>
}