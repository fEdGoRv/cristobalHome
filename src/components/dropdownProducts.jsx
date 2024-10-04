import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const DropDownProducts = () => {

    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const timerRef = useRef(null);

    const handleMouseEnter = () => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        setDropdownOpen(true);
    }

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(()=>{
            setDropdownOpen(false);
        },500);
    }

    const handleDropdownMouseEnter = () => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
    }

    const handleDropdownMouseLeave = () => {
        setDropdownOpen(false);
    }

    let sectionStyle = "relative font-semibold text-black hover:opacity-50 hover:text-morao group cursor-pointer transition-all duration-400"
    const underlineStyle = "absolute left-1/2 bg-morao bottom-0 w-0 h-[2px] bg-black transition-all duration-800 group-hover:w-full transform -translate-x-1/2"

    return <ul className="relativep-5 xl:p-8">
        <li
            className={sectionStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            Productos
            <span className={underlineStyle}></span>
        </li>
        <li 
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave} 
        className={`absolute left-1/2 flex bg-white w-auto mt-2 p-2 shadow-lg z-50 transition-all duration-400 ease-out transform -translate-x-1/2 
        ${dropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <ul className="p-1 text-left">
                <div className="relative w-64 align-left">
                    <h2 className="font-semibold py-4 text-morao">
                        Categorias
                    </h2>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-morao bg-opacity-25"></span>
                </div>

                <li className="m-2 cursor-pointer text-black hover:text-morao" onClick={() => {
                    navigate("/categories/chapas");
                    setDropdownOpen(false);
                }}>
                    Chapas
                </li>
                <li className="m-2 cursor-pointer text-black hover:text-morao" onClick={() => {
                    navigate("/categories/accesorios");
                    setDropdownOpen(false);
                }}>
                    Accesorios
                </li>
                <li className="m-2 cursor-pointer text-black hover:text-morao" onClick={() => {
                    navigate("/categories/pinchos");
                    setDropdownOpen(false);
                }}>
                    Pinchos
                </li>
                <li className="m-2 cursor-pointer text-black hover:text-morao" onClick={() => {
                    navigate("/categories/exteriores");
                    setDropdownOpen(false);
                }}>
                    Exteriores
                </li>
                <li className="m-2 cursor-pointer text-black hover:text-morao" onClick={() => {
                    navigate("/categories/fogones");
                    setDropdownOpen(false);
                }}>
                    Fogones
                </li>
                <li className="m-2 cursor-pointer text-black hover:text-morao" onClick={() => {
                    navigate("/categories/proyectos");
                    setDropdownOpen(false);
                }}>
                    Proyectos
                </li>
            </ul>
            <div className="p-1 text-left">
                <div className="relative w-64 ">
                    <h2 className="font-semibold py-4 text-morao">
                        Tienda
                    </h2>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-morao bg-opacity-25"></span>
                </div>
                <ul>
                    <li className="m-2 cursor-pointer text-black hover:text-morao">
                        Tendencias
                    </li>
                    <li className="m-2 cursor-pointer text-black hover:text-morao">
                        Nuevos productos
                    </li>
                    <li className="m-2 cursor-pointer text-black hover:text-morao">
                        Ofertas
                    </li>
                    <li className="m-2 cursor-pointer text-black hover:text-morao">
                        Los mas vendidos
                    </li>
                </ul>
            </div>
            <div className="w-64">
                <img src="/pinchos/DSC_2560.jpg" alt="present" />
            </div>
        </li>
    </ul>
}

export default DropDownProducts;