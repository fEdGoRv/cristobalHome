import { useLocation, useNavigate } from "react-router-dom";
import Button from "./button";
import "./home.css";
import { useCallback, useEffect } from "react";
import HomeCardDisplayer from "./homeCardDisplayer";
import SlideCards from "./slideCards";


const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const handleAnimationRender = useCallback(()=>{
    const moraOneElement = document.querySelector(".mora-one");
    const moraTwoElement = document.querySelector(".mora-two");
    const manuscritaElement = document.querySelector(".manuscrita");
    const tendenciasElement = document.querySelector(".tendencias");

    const addActiveClass = () => {
      moraOneElement?.classList.add("active");
      moraTwoElement?.classList.add("active");
      manuscritaElement?.classList.add("active");
      tendenciasElement?.classList.add("active");
    };

      addActiveClass();
  },[path])

  useEffect(() => {
    if (path === "/") {
      handleAnimationRender();
    }
  }, [handleAnimationRender, path]);

  
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
      <div className="grid place-items-center mt-24">
        <HomeCardDisplayer />
      </div>
      <div className="h-96 bg-[url('/public/pinchos/DSC_2862.jpg')] text-white bg-cover bg-center grid place-items-center">
        <h2 className="font-semibold font-josefin text-6xl">NUEVA COLECCIÓN</h2>
        <p className="text-xl font-semibold font-josefin">
          Cristobal es sinónimo de diseño y decoración.
          Conoce en nuestra tienda la nueva colección
        </p>
        <Button>
          VER MÁS
        </Button>
      </div>
      <div>
        <SlideCards />
      </div>
    </>
  );
};

export default Home;
