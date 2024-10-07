import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react"; 
import { modalActions } from "../store/modalSlice";
import cart from "../util/icons/icons8-carrito-de-compras-24.png";
import DropDownProducts from "./dropdownProducts"


export default function Header() {

    const [underline, setUnderline] = useState(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    const underlineStyle = "absolute left-1/2 bg-morao bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full transform -translate-x-1/2";
    let sectionStyle = "relative font-josefin font-semibold text-black hover:opacity-50 hover:text-morao group cursor-pointer transition-all duration-400";

    const handleClick = (id) => {
        setUnderline(id);
        navigate(id)
    }

    const openModal = () => {
        dispatch(modalActions.openModalHandler());
    }

    return <header className="text-white font-inherit hidden md:block">
        <div className="container mx-auto flex items-center h-24">
            <a href="shop" className="flex items-center justify-center">
                <img className="h-16" src="/pinchos/cristobal logo.jpg" alt="" />
            </a>
            <nav className="contents mt-24 text-base lg:text-lg">
                <ul className="mx-auto flex items-center">
                    <li className="p-5 xl:p-8">
                        <ul className={underline === "" || path === "/" ? `${sectionStyle} border-b-2 border-morao` : `${sectionStyle}`} onClick={() => handleClick("")}>
                            Inicio
                            {underline !== "" && path !== "/" ? <span className={underlineStyle}></span> : ""}
                        </ul>
                    </li>
                    <li className="p-5 xl:p-8">
                        <ul className={underline === "about" ? `${sectionStyle} border-b-2 border-morao` : `${sectionStyle}`} onClick={() => handleClick("about")}>
                            Cristobal Home
                            {underline !== "about" && <span className={underlineStyle}></span>}
                        </ul>
                    </li>

                    <DropDownProducts />

                    <li className="p-5 xl:p-8">
                        <ul className={underline === "contact" ? `${sectionStyle} border-b-2 border-morao` : `${sectionStyle}`} onClick={() => handleClick("contact")}>
                            Contacto
                            {underline !== "contact" &&<span className={underlineStyle}></span>}
                        </ul>
                    </li>
                </ul>
            </nav>
            <div onClick={openModal}>
            <span className="flex text-black">
                <div className="pr-2">
                    {totalQuantity > 0 && totalQuantity}
                </div>
                <img src={cart} alt="cart/logo" />
            </span>
        </div>
        </div>
        
    </header>
}
