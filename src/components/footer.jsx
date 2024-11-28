import { useNavigate } from "react-router-dom";
import { categories } from "../util/products";
import Button from "./button";
import { useRef, useState } from "react";
import { useHeaderContext } from "../store/HeaderContext";

const Footer = () => {

  const [emailData, setEmailData] = useState("")
  const navigate = useNavigate();
  const email = useRef()

  const handleNavigate = (path) =>{
     navigate(`/${path}`);
  }

  const {
    handlePrincipalPagesClick
  } = useHeaderContext()

  const handleSuscription = () => {
    setEmailData(email.current.value);
    console.log(email.current.value);
    console.log(emailData)/*para que no me de el error, hasta tener otra foo*/
    email.current.value = "";
  }
  return (
    <div className="grid grid-cols-3 h-16 lg:h-64 mt-16 bg-morao shadow-lg">
      <div className="hidden lg:block m-4 text-white font-lora">
        <p className="mb-4 font-bold">Cristobal Home</p>
        <div className="border-b-2 border-stone-800 max-w-16"></div>
        <div className="mt-4">
          <p 
          onClick={()=>{
            handlePrincipalPagesClick("about")
            handleNavigate("about")}
          }
          className="cursor-pointer hover:text-stone-400"
          >Sobre Nosotros</p>
          <p
          onClick={()=>handleNavigate("help")}
          className="cursor-pointer hover:text-stone-400"
          >Ayuda</p>
        </div>
      </div>
      <div className="hidden lg:block m-4 text-white font-lora">
        <p className="mb-4 font-bold">Categorias</p>
        <div className="border-b-2 border-stone-800 max-w-16"></div>
        <div className="mt-4 ">
        {categories.map(cat => 
          <div key={cat.id}>
              <p
              className="cursor-pointer hover:text-stone-400" 
              onClick={()=>{
                handleNavigate(`categories/${cat.id}`)
                handlePrincipalPagesClick("products")
              }}
              >{cat.name}</p>
          </div>
        )}
        </div>
      </div>
      <div className="hidden lg:block m-4 text-white font-lora">
        <p className="mb-4 font-bold">Suscribite</p>
        <div className="border-b-2 border-stone-800 max-w-16"></div>
        <div className="mt-4 flex">
          <input
          type="email"
          ref={email}
          className="p-2 border-solid border-2 border-stone-300 text-morao"
          placeholder="Ingresa tu email"
          />
          <Button
          classes="input"
          onClick={handleSuscription}
          >
            SUSCRIBITE
          </Button>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
