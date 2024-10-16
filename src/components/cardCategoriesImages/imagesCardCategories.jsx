const ImagesCardCategories = ({ catId, image }) => {
  let dStyl = {};

  switch (catId) {
    default:
      dStyl = {
        posName: "top-1 left-2",
        posDesc: "top-16 left-2",
        h: "2/3",
        nFontSize: "6xl",
        dFontSize: "xl",
        name: "Pinchos",
        description: "ANIMALES - FRASES",
      };
      break;
    case "fogones":
      dStyl = {
        posName: "left-8 top-8",
        h: "1/3",
        nFontSize: "6xl",
        dFontSize: "",
        name: "Fogones",
        description: "",
      };
      break;
    case "moviliario":
      dStyl = {
        posName: "top-2",
        posDesc: "top-12",
        h: "2/3",
        nFontSize: "4xl",
        dFontSize: "xl",
        name: "Moviliario",
        description: "MESAS · SILLAS",
      };
      break;
    case "chapas":
      dStyl = {
        posName: "top-1 left-4",
        posDesc: "top-16 left-4",
        h: "1/3",
        nFontSize: "6xl",
        dFontSize: "xl",
        name: "Carteles",
        description: "FRASES · MOTIVOS",
      };
      break;
    case "accesorios":
      dStyl = {
        posName: "left-8 top-20",
        posDesc: "left-12 top-28",
        h: "2/3",
        nFontSize: "2xl",
        dFontSize: "xl",
        name: "Pequeños detalles",
        description: "ACCSESORIOS",
      };
      break;
    case "iluminación":
      dStyl = {
        posName: "left-8 top-2",
        posDesc: "left-2 top-12",
        h: "1/3",
        nFontSize: "4xl",
        dFontSize: "xl",
        name: "Iluminación",
        description: "FAROLES · LAMPARAS",
      };
      break;
  }

  return (
    <div
      className={`relative w-64 m-4 h-${dStyl.h} bg-cover bg-center bg-url('/pinchos/${image}')`}
    >
      <p
        className={`absolute m-2 text-stone-800 ${dStyl.posName} text-${dStyl.nFontSize} font-lobster ${dStyl.description !== "" && "border-b-2 border-stone-800"} `}
      >
        {dStyl.name}
      </p>
      <p
        className={`absolute m-2 text-morao ${dStyl.posDesc} font-josefin font-bold text-${dStyl.dFontSize}`}
      >
        {dStyl.description}
      </p>
    </div>
  );
};

export default ImagesCardCategories;
