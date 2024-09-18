import { useLocation } from "react-router-dom";

import Modal from "./modal";
import Cart from "./cart";
import Main from "./main";

const Layout = () => {
    const location = useLocation();
    const state = location.state || {};
  
  
    return <>
        {state.modal && (
          <Modal isOpen={true} onClose={() => console.log("Modal closed")}>
            <Cart /> 
          </Modal>
        )}
        <Main />
    </>
  }

  export default Layout;
  