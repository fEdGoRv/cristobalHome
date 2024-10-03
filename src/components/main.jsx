import { Outlet } from "react-router-dom";

import Header from "./header";
import Modal from "./modal";
import Cart from "./cart";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modalSlice";
import Footer from "./footer";

const Main = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modal.isOpen);

    const onClose = () => {
       dispatch(modalActions.closeModalHandler());
    }

    return (
        <div className="bg-[url('/public/pinchos/DSC_2781.jpg')] bg-cover bg-center h-screen text-center">
            <Header />
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