import { useSelector } from "react-redux";


export default function Button({ children, classes, ...props }) {
  const activeCarousel = useSelector((state) => state.cardCategories.activeCarousel);
  
  const cardCatButton ="m-1 font-josefin font-bold rounded-md bg-stone-800 py-2 px-4 border border-transparent text-center text-md text-white shadow-md transform transition-all duration-700 hover:bg-morao";
  
  const cardButton =
    "m-1 rounded-md font-semibold bg-stone-800 py-2 px-4 border border-transparent text-center text-sm text-white shadow-md transform transition-all duration-700 hover:bg-morao";
  const defButton =
    "bg-morao p-2 font-semibold font-lora hover:bg-stone-800 transform transition-all duration-700 text-white text-xl p-2 m-1 rounded shadow-lg";

  const cartItemButton = `w-6 rounded-full bg-morao p-2 hover:bg-stone-400 transform transition-all duration-700 p-2 m-1 rounded shadow-lg`;

  const modalCancel = `w-8 bg-morao p-2 hover:bg-stone-400 transform transition-all duration-700 p-2 m-1 rounded shadow-lg `;

  const detail =
    "m-2 p-2 rounded transform transition-all duration-700 borde-solid border-2 border-morao font-semibold text-stone-800 hover:border-none hover:bg-stone-800 hover:text-white";

  const headerButton = `bg-opacity-5 m-2 p-2 rounded border-solid border-2 hover:border-stone-900 active:bg-stone-900`;

  const input = "p-2 text-stone-800 bg-grisCard hover:bg-stone-300 transfrom transition-all duration-700 border-solid border-stone-300 border-2";

  const white = "p-2 font-semibold font-josefin bg-white border-solid border-stone-300 border text-xs";

  const carousel = `${activeCarousel ? "opacity-50" : "opacity-0"} p-2 transform transition-all duration-700 hover:opacity-100 bg-stone-300`;
  
  switch (classes) {
    default:
      classes = defButton;
      break;
    case "cardButton":
      classes = cardButton;
      break;
    case "cardCatButton":
      classes = cardCatButton;
      break;
    case "cartItem":
      classes = cartItemButton;
      break;
    case "modalCancel":
      classes = modalCancel;
      break;
    case "headerButton":
      classes = headerButton;
      break;
    case "detail":
      classes = detail;
      break;
    case "input":
      classes = input;
      break;
    case "white":
      classes = white;
      break;
    case "carousel":
      classes = carousel;
      break;
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
