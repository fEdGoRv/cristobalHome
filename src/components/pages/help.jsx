import Instagram from "../instagram";

const Help = () => {

   return <div className="flex items-center justify-center mt-2 font-josefin text-center min-h-96">
      <div className="mx-8">
         <Instagram />
      </div>
      <div className="">
         <h1 className="text-2xl text-morao font-bold">
            Estamos para ayudarte.
         </h1>
         <h2 className="text-2xl text-morao font-bold">
            Podes comunicarte directamente desde nuestro instagram, haciendo click en el logo.
         </h2>
         <h2 className="text-2xl text-morao font-bold">
            También aquí te dejamos respuestas a las preguntas mas fecuentes.
         </h2>

      </div>

   </div>
}

export default Help;