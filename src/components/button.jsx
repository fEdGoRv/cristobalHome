export default function Button({ children, classes, ...props }) {
  const cardButton =
    "m-1 rounded-md bg-stone-800 py-2 px-4 border border-transparent text-center text-sm text-white shadow-md transform transition-all duration-700 hover:bg-morao";
  const defButton =
    "bg-morao hover:bg-stone-800 text-white text-xl p-2 m-1 rounded shadow-lg";

  const cartItemButton = `w-5 rounded-full ${defButton}`;

  const modalCancel = ` w-8 ${defButton}`;

  const detail =
    "m-2 p-2 rounded borde-solid border-2 border-morao font-semibold text-stone-800 hover:border-none hover:bg-stone-800 hover:text-white";

  const headerButton = `bg-opacity-5 m-2 p-2 rounded border-solid border-2 hover:border-stone-900 active:bg-stone-900`;

  switch (classes) {
    default:
      classes = defButton;
      break;
    case "cardButton":
      classes = cardButton;
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
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
