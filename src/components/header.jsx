import { useSelector } from "react-redux";
import { modalActions } from "../store/modalSlice";
import cart from "../util/icons/icons8-carrito-de-compras-24.png";
import DropDownProducts from "./dropdownProducts"
import { useHeaderContext } from "../store/HeaderContext";


export default function Header() {

    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const {
        dispatch,
        path,
        underline,
        handlePrincipalPagesClick,
        underlineStyle,
        sectionStyle
    } = useHeaderContext();

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
                        <ul
                            className={underline === "" || path === "/" ? `${sectionStyle} border-b-2 border-morao` : `${sectionStyle}`}
                            onClick={() => handlePrincipalPagesClick('')}>
                            INICIO
                            {underline !== "" && path !== "/" ? <span className={underlineStyle}></span> : ""}
                        </ul>
                    </li>
                    <li className="p-5 xl:p-8">
                        <ul
                            className={underline === "about" || path === "/about" ? `${sectionStyle} border-b-2 border-morao` : `${sectionStyle}`}
                            onClick={() => handlePrincipalPagesClick('about')}>
                            CRISTOBAL HOME
                            {underline !== "about" && path !== "/about" ? <span className={underlineStyle}></span> : ""}
                        </ul>
                    </li>

                    <DropDownProducts />

                    <li className="p-5 xl:p-8">
                        <ul
                            className={underline === "contact" || path === "/contact" ? `${sectionStyle} border-b-2 border-morao` : `${sectionStyle}`}
                            onClick={() => handlePrincipalPagesClick('contact')}>
                            CONTACTO
                            {underline !== "contact" && path !== "/contact" ? <span className={underlineStyle}></span> : ""}
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
