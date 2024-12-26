import Instagram from "../instagram";
import Question from "../questionHelp";

const Help = () => {

   return <>
      <div className="flex items-center justify-center mt-2 font-josefin text-center min-h-96">
         <div className="mx-8">
            <Instagram />
         </div>
         <div className="max-w-96 text-stone-800">
            <h1 className="text-2xl font-bold">
               Estamos para ayudarte.
            </h1>
            <h2 className="text-2xl font-bold">
               Podes comunicarte directamente desde nuestro instagram, haciendo click en el logo o en nombre de usuario.
            </h2>
         </div>
      </div>

      <h2 className="m-8 text-center text-2xl text-morao font-bold">
               También aquí te dejamos respuestas a las preguntas mas fecuentes.
            </h2>
      <div className="flex justify-center">
         <div className="my-auto">
            <Question
               question="¿Hacen envios a todo el pais?"
               answer="Si hacemos envios a todo el pais, realiza tu pedido completando el formulario y nos pondremos en contacto para arreglar todo lo necesario." />
            <Question
               question="¿tienen algun lugar fisico a donde ir?"
               answer="Si en la ciudad de Azul, prov. de Buenos Aires, colon 1004." />
            <Question
               question="¿Se puede realizar pedidos por telefono?"
               answer="No en este momento solo contamos por este medio, realizandolo el pedido desde aquí." />
            <Question
               question="¿Cuanto de demora en llegar?"
               answer="Tardamos entre una semana y quince dias en despachar el pedido, mas lo que el transporte tarde en hacer el delivery." />
         </div>
         <div className="m-4">
            <img
               className="max-w-72"
               src="/pinchos/DSC_2862.jpg"
               alt="someImage" />
         </div>
      </div>
   </>
}

export default Help;