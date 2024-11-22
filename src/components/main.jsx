import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { HeaderProvider } from "../store/HeaderContext";
import Header from "./header";
import Modal from "./modal";
import Cart from "./cart";
import { modalActions } from "../store/modalSlice";
import Footer from "./footer";
import ItemDetails from "./itemDetails";
import ScrollToTop from "./scrollToTop";

const Main = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const cartModal = useSelector(state => state.modal.cartModal);
  const detailModal = useSelector(state => state.modal.detailModal);
  const location = useLocation();
  let path = location.pathname;

  const onClose = () => {
    dispatch(modalActions.closeModalHandler());
  };

  return (
    <div
      className={`bg-${path === "/" ? "title-about" : "white"} bg-cover bg-center h-screen text-center`}
    >
      <ScrollToTop />
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Modal isOpen={isOpen} onClose={onClose}>
        {cartModal && <Cart />}
        {detailModal && <ItemDetails />}
      </Modal>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
