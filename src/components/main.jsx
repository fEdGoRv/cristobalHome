import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { HeaderProvider } from "../store/HeaderContext";
import Header from "./header";
import Modal from "./modal";
import Cart from "./cart";
import { modalActions } from "../store/modalSlice";
import Footer from "./footer";

const Main = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modal.isOpen);
    const location = useLocation();
    let path = location.pathname;

    const onClose = () => {
        dispatch(modalActions.closeModalHandler());
    }

    // const getBackgroundStyle = () => {
    //     if (path === '/') {
    //         return "home-taste";
    //     }
    //     else {
    //         return 'white';
    //     }
    // }

    return (
        <div className={`bg-${path === "/" ? "home-taste" : "white"} bg-cover bg-center h-screen text-center`} >
            <HeaderProvider>
                <Header />
            </HeaderProvider>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Cart />
            </Modal>
            <div>
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Main;