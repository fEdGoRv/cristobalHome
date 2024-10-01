export default function Button({ children, classes, ...props }) {
    const cardButton ="m-1 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

    const defButton = "bg-orange-600 text-white text-xl p-1 m-1 rounded border-solid border-2 border-orange-700 hover:bg-orange-400 shadow-lg"
    
    const cartItemButton = `w-5 rounded-full ${defButton}`;

    const modalCancel = ` w-8 ${defButton}`;

    const headerButton =`bg-opacity-5 m-2 p-2 rounded border-solid border-2 hover:border-stone-900 active:bg-stone-900`

    switch (classes){
        default :
            classes = defButton;
        break;
        case 'cardButton' : 
            classes = cardButton;
        break;
        case 'cartItem' :
            classes = cartItemButton;
            break;
        case 'modalCancel' :
            classes = modalCancel;
            break;
        case 'headerButton' :
            classes = headerButton;
            break;
        }
    return <button className={classes} {...props}>
        {children}
    </button>
}