import CardAbout from "../cardAbout";

const cardData = [
  {
    title: "HOGAR",
    description: "Ofrecemos artículos con diseños exclusivos para decorar tu hogar y hacer único cada ambiente de tu casa.",
    image: "DSC_2861.jpg"
  },
  {
    title: "AIRE LIBRE",
    description: "Tenemos productos con estilo para ambientar tu jardín. Objetos decorativos de diseño propio en chapa, madera y tela.",
    image: "DSC_2848.jpg"
  },
  {
    title: "ACCESORIOS",
    description: "Los mejores accesorios para cada pequeño detalle de tu hogar o tu jardín. Decora tu casa como siempre quisiste.",
    image: "DSC_2875.jpg"
  }
]


const AboutUs = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-center items-center h-44 w-full text-stone-800 sm:text-white text-6xl font-playfair font-bold bg-cover bg-center bg-title-about">
        <h1>Christobal Home</h1>
      </div>
      <div className="flex justify-center m-4">
        <div className="w-5/12 text-left mt-16 ">
          <div className="mt-6">
            <h2 className="p-4 font-playfair font-bold text-4xl">
              ¿Quienes Somos?
            </h2>
            <p className="font-lora font-semibold p-4 opacity-50">
              Chistobal Home es una empresa dedicada a la venta de artículos de
              decoración, de diseño propio en chapa, madera y tela. Nuestro
              taller se encuentra ubicado en la ciudad de Azul. Cuenta con
              máquinas de primer nivel que garantizan la calidad del producto y
              el detalle suficiente para lograr diseños únicos.
            </p>
          </div>
          <div className="mt-6">
            <h2 className=" p-4 font-playfair font-bold text-4xl">
              Nuestro comienzo
            </h2>
            <p className="font-lora font-semibold p-4 opacity-50">
              Cristobal Home empezó como un emprendimiento de dos amigos en la
              ciudad de Azul. El querer crear una marca que se distinga por su
              invacion y adaptabilidad nos llevo, de algo que empezó como un
              hobby, a que hoy por suerte se multiplique en creatividad y
              ventas.
            </p>
          </div>
        </div>
        <div className="hidden lg:block w-2/12 m-12">
          <img src="/pinchos/DSC_2895.jpg" alt="lechu" />
        </div>
      </div>
      <div className="flex bg-cover h-64 bg-design-detail bg-center grid place-items-center text-center text-white">
        <div>
          <h1 className="text-2xl lg:text-6xl m-8 font-bold font-playfair">
            DISEÑO Y DECORACION
          </h1>
          <p className="font-playfair">
            Christobal Home sinónimo de diseño y decoración.
          </p>
        </div>
      </div>
      <div className="block text-center justify-center lg:flex my-16">
        {cardData.map(card => 
        <div key={card.title}>
          <CardAbout
           title={card.title}
           description={card.description}
           image={card.image}
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
