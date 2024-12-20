import Button from "./generals/button";
import cancel from "../util/icons/modalCancel.png";
import { useSelector } from "react-redux";
import { createPortal } from 'react-dom';

const Modal = ({ children, onClose, isOpen }) => {

  if (!isOpen) return null;
  const stopPropagation = (e) => e.stopPropagation();
  const detailModal = useSelector(state => state.modal.detailModal);
 
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        open={isOpen}
        className={`p-6 w-full z-50 bg-white ${detailModal ? "max-w-4xl h-1/2" : "max-w-4xl h-auto"}`}
        onClick= {()=>onClose()}
      >
        <div className="flex flex-row-reverse w-full">
          <Button onClick={()=>onClose()} 
          classes="modalCancel"
          >
            <img src={cancel} alt="cancel/icon" />
          </Button>
        </div>
        <div onClick={stopPropagation} className="">
          {children}
        </div>
      </div>
    </div>
  , document.getElementById("modal")
)
};

export default Modal;
