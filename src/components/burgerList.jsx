import { useHeaderContext } from "../store/HeaderContext";

const BurgerList = () => {

    const {
        navigate,
        sectionStyle,
        setBurgerList
    } = useHeaderContext();

    const handlerAction = (page) => {
        navigate(page);
        setBurgerList(false);
    }

    return (
    <ul className="absolute text-center bg-grisCard w-64 border-2 border-morao m-2">
        <li 
        className={sectionStyle}
        onClick={() => handlerAction("")}
        >INICIO</li>
        <li
        className={sectionStyle}
        onClick={() => handlerAction("about")}
        >CRISTOBAL HOME</li>
        <li
        className={sectionStyle}
        onClick={() => handlerAction("shop")}
        >PRODUCTS</li>
        <li
        className={sectionStyle}
        onClick={() => handlerAction("contact")}
        >CONTACTO</li>
    </ul>
    )
}

export default BurgerList;