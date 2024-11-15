import Button from "./button";
import cancel from "../util/icons/modalCancel.png";
import { useSelector } from "react-redux";

const Modal = ({ children, onClose, isOpen }) => {

  if (!isOpen) return null;
  const stopPropagation = (e) => e.stopPropagation();
  const animation = useSelector(state => state.modal.animation);
 
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <dialog
        open={isOpen}
        className={`p-6 w-full z-50 ${animation ? "max-w-4xl h-1/2" : "max-w-4xl max-h-96"}`}
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
      </dialog>
    </div>
  );
};

export default Modal;
