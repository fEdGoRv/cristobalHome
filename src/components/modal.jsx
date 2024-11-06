import Button from "./button";
import cancel from "../util/icons/modalCancel.png";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modalSlice";


const Modal = ({ children, onClose, isOpen }) => {
  if (!isOpen) return null;

  const dispatch = useDispatch();
  const stopPropagation = (e) => e.stopPropagation();
  const closeCartModal = () => {
     dispatch(modalActions.closeCartModalHandler());
  }
  const closeDetailModal = () => {
    dispatch(modalActions.closeDetailModalHandler());
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <dialog
        open={isOpen}
        className="rounded bg-stone-400 p-6 max-w-4xl w-full z-50"
        onClick= {() => {
          onClose();
          closeCartModal();
          closeDetailModal();
        }}
      >
        <div className="flex flex-row-reverse w-full">
          <Button onClick={()=>{
            onClose();
            closeCartModal();
            closeDetailModal();
          }} 
          classes="modalCancel"
          >
            <img src={cancel} alt="cancel/icon" />
          </Button>
        </div>
        <div onClick={stopPropagation} className="relative">
          {children}
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
