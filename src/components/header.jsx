import { useSelector } from "react-redux";
import { modalActions } from "../store/modalSlice";
import cart from "../util/icons/icons8-carrito-de-compras-24.png";
import DropDownProducts from "./dropdownProducts";
import { useHeaderContext } from "../store/HeaderContext";
import { useEffect, useState } from "react";

export default function Header() {

  const [float, setFloat] = useState(false);
  const [initialPos, setInitialPos] = useState(false);
  const [fixedPos, setFixedPosition] = useState(false);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const {
    dispatch,
    path,
    underline,
    handlePrincipalPagesClick,
    underlineStyle,
    sectionStyle,
  } = useHeaderContext();

  const openModal = () => {
    dispatch(modalActions.openCartModalHandler());
  };


  const activePosition = "fixed left-0 top-0 w-full z-50 bg-white transform transition-all easy-in-out duration-500 translate-y-0 border-b-2 border-grisCard"
  const initialPosition = "transform -translate-y-full "
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setFloat(true);
      }else{
        setFloat(false);
      }
    }

    window.addEventListener( 'scroll', handleScroll );

    return () => {
      window.removeEventListener( 'scroll', handleScroll );
    }
  }, [])
  

  useEffect(()=>{
    let initialTimer;
    if(float){
      setInitialPos(true);
      initialTimer = setTimeout(()=>{
        setInitialPos(false);
        setFixedPosition(true)
      }, 300);
    }else{
      setFixedPosition(false);
      setInitialPos(false);
    }
    return ()=>{
      clearTimeout(initialTimer);
    }
  },[float])

  return (
    <header 
    className={`
      ${initialPos ? initialPosition : ""}
      ${fixedPos ? activePosition: ""}
      ${path !== "/" ? "bg-white" : ""}
      `} 
    >
      <div className="container mx-auto flex items-center h-24">
        <img
          className="h-16 rounded-full m-0"
          src="/pinchos/cristobal logo.jpg"
          alt=""
        />

        <nav className="contents mt-24 text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            <li className="p-5 xl:p-8">
              <ul
                className={
                  underline === "" || path === "/"
                    ? `${sectionStyle} border-b-2 border-morao`
                    : `${sectionStyle}`
                }
                onClick={() => handlePrincipalPagesClick("")}
              >
                INICIO
                {underline !== "" && path !== "/" ? (
                  <span className={underlineStyle}></span>
                ) : (
                  ""
                )}
              </ul>
            </li>
            <li className="p-5 xl:p-8">
              <ul
                className={
                  underline === "about" || path === "/about"
                    ? `${sectionStyle} border-b-2 border-morao`
                    : `${sectionStyle}`
                }
                onClick={() => handlePrincipalPagesClick("about")}
              >
                CRISTOBAL HOME
                {underline !== "about" && path !== "/about" ? (
                  <span className={underlineStyle}></span>
                ) : (
                  ""
                )}
              </ul>
            </li>

            <DropDownProducts />

            <li className="p-5 xl:p-8">
              <ul
                className={
                  underline === "contact" || path === "/contact"
                    ? `${sectionStyle} border-b-2 border-morao`
                    : `${sectionStyle}`
                }
                onClick={() => handlePrincipalPagesClick("contact")}
              >
                CONTACTO
                {underline !== "contact" && path !== "/contact" ? (
                  <span className={underlineStyle}></span>
                ) : (
                  ""
                )}
              </ul>
            </li>
          </ul>
        </nav>
        <div onClick={openModal}>
          <span className="flex text-black">
            <div className="pr-2">{totalQuantity > 0 && totalQuantity}</div>
            <img src={cart} alt="cart/logo" />
          </span>
        </div>
      </div>
    </header>
  );
}
