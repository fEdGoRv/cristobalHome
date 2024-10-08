import { useLocation, useNavigate } from "react-router-dom";
import Button from "./button";
import './home.css'
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        if (path === '/') {
            const moraElement = document.querySelector('.mora');
            const manuscritaElement = document.querySelector('.manuscrita');
            const tendenciasElement = document.querySelector('.tendencias');

            if (path === "/" && moraElement && manuscritaElement && tendenciasElement) {
                window.addEventListener("load", () => {
                    moraElement.classList.add('active');
                    manuscritaElement.classList.add('active');
                    tendenciasElement.classList.add('active');
                });
            }
            return () => {
                if (moraElement && manuscritaElement && tendenciasElement) {
                    moraElement.classList.remove('active');
                    manuscritaElement.classList.remove('active');
                    tendenciasElement.classList.remove('active');
                }
            };
        }
    }, [path]);


    return <div className="realative h-screen w-full">
        <div>
            <h1 className="mora absolute top-64 start-96 text-8xl text-morao font-bold font-josefin">
                RENOVÁ
            </h1>
            <h1 className="mora absolute top-48 left-48 text-stone-800 text-8xl font-bold font-josefin">
                TU
            </h1>
            <h1 className="manuscrita absolute inset-x-2/3 bottom-96 text-stone-800 text-8xl font-bold font-lobster">
                jardín
            </h1>
        </div>
        <div className=" absolute inset-y-2/3 inset-x-1/3 tendencias m-8">
            <h1 className="text-4xl text-morao font-josefin font-semibold ">
                Tendencias
            </h1>
            <Button classes="detail" onClick={() => navigate("shop")}>
                Ir a la tienda
            </Button>
        </div>
    </div>
}

export default Home;