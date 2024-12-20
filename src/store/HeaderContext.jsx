import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../util/products";

const HeaderContext = createContext();

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

export const HeaderProvider = ({ children }) => {
  const [underline, setUnderline] = useState(null);
  const [burgerList, setBurgerList] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const handlePrincipalPagesClick = (id) => {
    setUnderline(id);
    if(id === "products") return
    navigate(id);
  };

  const underlineStyle =
    "absolute left-1/2 bg-morao bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full transform -translate-x-1/2";
  let sectionStyle =
    "relative font-josefin font-bold text-black hover:opacity-50 hover:text-morao group cursor-pointer transition-all duration-400";

  const headerCtxValue = {
    underline,
    setUnderline,
    setBurgerList,
    navigate,
    dispatch,
    path,
    handlePrincipalPagesClick,
    underlineStyle,
    sectionStyle,
    burgerList
  };

  return (
    <HeaderContext.Provider value={headerCtxValue}>
      {children}
    </HeaderContext.Provider>
  );
};
