
const ImagesCardCategories = ({catId, image}) => {
    let dStyl = {}

    switch (catId ){
        default:
        dStyl={
        posName: "bottom-8 right-2",
        posDesc: "bottom-2 right-2",
        h: "64",
        nFontSize: "6xl",
        dFontSize: "xl",
        name: "Pinchos",
        description: "ANIMALES - FRASES",
        img: `[url('pinchos/${image}')]`
        };
        break;
        case "fogones" :
            dStyl = {
                posName: "left-8 top-8",
                h: "48",
                nFontSize: "6xl",
                dFontSize: "",
                name: "FOGONES",
                description: "",
                img: `[url('/pinchos/${image}')]`
            };
        break;
        case "exteriores" :
            dStyl = {
                posName: "top-2",
                posDesc: "top-12",
                h: "64",
                nFontSize: "4xl",
                dFontSize: "xl",
                name: "Moviliario",
                description: "MESAS · SILLAS",
                img: `[url('/pinchos/${image}')]`
            };
        break;
        case "chapas" :
            dStyl = {
                posName: "top-1 left-4",
                posDesc: "top-16 left-4",
                h: "48",
                nFontSize: "6xl",
                dFontSize: "xl",
                name: "Carteles",
                description: "FRASES · MOTIVOS",
                img: `[url('/pinchos/${image}')]`
            };
        break;
        case "accesorios" :
            dStyl = {
                posName: "left-8 top-20",
                posDesc: "left-12 top-28",
                h: "64",
                nFontSize: "2xl",
                dFontSize: "xl",
                name: "Pequeños detalles",
                description: "ACCSESORIOS",
                img: `[url('/pinchos/${image}')]`
            };
        break;
        case "iluminación" :
            dStyl = {
                posName: "left-8 top-2",
                posDesc: "left-2 top-12",
                h: "48",
                nFontSize: "4xl",
                dFontSize: "xl",
                name: "Iluminación",
                description: "FAROLES · LAMPARAS",
                img: `[url('/pinchos/${image}')]`
            };
        break;
    }
        
        
    return (
        <div className={`relative w-64 m-4 h-${dStyl.h} bg-cover bg-center bg-${dStyl.img}`}>
            <p className={`absolute m-2 text-stone-800 ${dStyl.posName} text-${dStyl.nFontSize} font-lobster ${dStyl.description !== "" && "border-b-2 border-stone-800" } `}>{dStyl.name}</p> 
            <p className={`absolute m-2 text-morao ${dStyl.posDesc} font-playfair font-semibold text-${dStyl.dFontSize}`}>{dStyl.description}</p>
        </div>
    )
}

export default ImagesCardCategories;