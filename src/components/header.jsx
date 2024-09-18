import { useDispatch, useSelector } from "react-redux";
import cart from "../util/icons/icons8-carrito-de-compras-24.png";

import Button from "./button";
import { modalActions } from "../store/modalSlice";


export default function Header() {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(modalActions.openModalHandler());
    }

    return <div className="flex flex-row-reverse w-full bg-stone-700 ">
        <Button onClick={openModal} >
            <span className="flex text-black">
                <div className="pr-2">{totalQuantity > 0 && totalQuantity}</div>
                <img src={cart} alt="cart/logo" />
            </span>
        </Button>
        <div className="basis-3/4">
            <h1 className="min-h-4 p-2 text-white text-2xl">
                Todo decoración en chapa!
            </h1>
        </div>
    </div>
}