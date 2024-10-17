import { useLocation, useNavigate } from "react-router-dom";
import Button from "./button";
import "./home.css";
import { useEffect } from "react";
import HomeCardDisplayer from "./homeCardDisplayer";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const moraOneElement = document.querySelector(".mora-one");
    const moraTwoElement = document.querySelector(".mora-two");
    const manuscritaElement = document.querySelector(".manuscrita");
    const tendenciasElement = document.querySelector(".tendencias");

    const addActiveClass = () => {
      console.log("aaaaaagregando");
      moraOneElement.classList.add("active");
      moraTwoElement.classList.add("active");
      manuscritaElement.classList.add("active");
      tendenciasElement.classList.add("active");
    };

    if (path === "/") addActiveClass();
  }, [path]);

  useEffect(() => {
    const moraOneElement = document.querySelector(".mora-one");
    const moraTwoElement = document.querySelector(".mora-two");
    const manuscritaElement = document.querySelector(".manuscrita");
    const tendenciasElement = document.querySelector(".tendencias");

    const removeActiveClass = () => {
      console.log("borrandoooooooooooo");
      moraOneElement.classList.remove("active");
      moraTwoElement.classList.remove("active");
      manuscritaElement.classList.remove("active");
      tendenciasElement.classList.remove("active");
    };

    if (path === "/")
      return () => {
        removeActiveClass();
      };
  }, [path]);

  return (
    <>
      <div className="realative h-screen w-full">
        <div>
          <h1 className="mora-one absolute top-52 inset-x-2/3 text-8xl text-morao font-bold font-josefin">
            RENOVÁ
          </h1>
          <h1 className="mora-two absolute top-72 inset-x-3/4 text-stone-800 text-7xl font-bold font-josefin">
            TU
          </h1>
          <h1 className="manuscrita absolute inset-x-2/3 inset-y-1/3 text-stone-800 text-8xl font-bold font-lobster">
            jardín
          </h1>
        </div>
        <div className="tendencias absolute left-32 inset-y-3/4 m-8">
          <h1 className="text-6xl text-morao font-josefin font-bold border-b-4 border-stone-800 ">
            Tendencias
          </h1>
          <Button classes="detail" onClick={() => navigate("shop")}>
            Ir a la tienda
          </Button>
        </div>
      </div>
      <div className="grid place-items-center mt-12">
        <HomeCardDisplayer />
      </div>
      <div className="h-96 mt-12 bg-[url('/public/pinchos/DSC_2862.jpg')] text-white bg-cover bg-center grid place-items-center">
        <h2 className="font-semibold font-josefin text-4xl">NUEVA COLECCIÓN</h2>
        <p className="text-xl">
          Cristobal es sinónimo de diseño y decoración.
          Conoce en nuestra tienda la nueva colección
        </p>
        <Button>
          VER MÁS
        </Button>
      </div>
    </>
  );
};

export default Home;
