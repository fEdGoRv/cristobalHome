import { Outlet, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { HeaderProvider } from "../../store/HeaderContext";
import Header from "./header";
import Modal from "../modal";
import Cart from "../cart";
import { modalActions } from "../../store/modalSlice";
import Footer from "./footer";
import ItemDetails from "../itemDetails";
import ScrollToTop from "../scrollToTop";
import Loader from "../generals/loader";
import FormConfirm from "../formCorfirmShopping";
import Toastify from "../generals/toastify";

const Main = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const cartModal = useSelector(state => state.modal.cartModal);
  const detailModal = useSelector(state => state.modal.detailModal);
  const formModal = useSelector(state => state.modal.formModal);
  const toastifyState = useSelector(state => state.toastify.toast);

  const onClose = () => {
    dispatch(modalActions.closeModalHandler());
  };
  const navigation = useNavigation();
  return (
    <div>
      <ScrollToTop />
      <HeaderProvider>
        <div className="h-24">
        <Header />
        </div>
        {navigation.state === "loading" && <div className="grid place-items-center"><Loader /></div>}
        {toastifyState !== "" && toastifyState !== undefined && <Toastify type={toastifyState} />}
        <Modal isOpen={isOpen} onClose={onClose}>
          {cartModal && <Cart />}
          {detailModal && <ItemDetails />}
          {formModal && <FormConfirm />}
        </Modal>
        <div>
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </HeaderProvider>
    </div>
  );
};

export default Main;
