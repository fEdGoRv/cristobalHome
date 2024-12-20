import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "./generals/button";
import { cartActions } from "../store/cartSlice";
import { modalActions } from "../store/modalSlice";
import Loader from "./generals/loader";
import { toastifyActions } from "../store/toastifySlice";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const animation = useSelector(state => state.modal.animation);
  const product = useSelector(state => state.modal.product);
  const position = useSelector(state => state.modal.position);
  const newPos = useSelector(state => state.modal.newPosition);
  const activeImg = "opacity-100 translate-x-0 translate-y-0 scale-x-110 scale-y-110";
  let initialPosImg = "opacity-0";
  const activeDes = "transition-all translate-x-10 duration-700 opacity-100";
  const initialPosDes = "-translate-x-80 opacity-0 w-2"

  useEffect(() => {
    if (position && product) {
      const overlay = document.createElement('div');
      overlay.className = `fixed bg-cover bg-center transform duration-500 transition-all z-50`;
      overlay.style.top = `${position.y}px`;
      overlay.style.left = `${position.x}px`;
      overlay.style.width = `${position.width}px`;
      overlay.style.height = `${position.height}px`;
      overlay.style.backgroundImage = `url(/pinchos/${product.image})`;

      document.body.appendChild(overlay);
      
      setTimeout(()=>{
        requestAnimationFrame(() => {
          overlay.style.top = '50%';
          overlay.style.left = '50%';
          overlay.style.transform = 'translate(-50%, -50%) scale(1.1)';
        });
      }, 10)
      
      setTimeout(() => {

        const finalRect = overlay.getBoundingClientRect();
        const secPos = {
           x: finalRect.x,
           y: finalRect.y,
           width: finalRect.width,
           height: finalRect.height
        };

        document.body.removeChild(overlay);

        dispatch(modalActions.handleAnimation({secPos}))
        // initialPosImg = `left-[${newPos.x}px] top-[${newPos.y}] w-[${newPos.width}px] h-[${newPos.height}] translate-x-38 translate-y-38 scale-x-[${newPos.width}/${position.width}] scale[${newPos.height/position.height}]`
        setTimeout(() => {
          dispatch(modalActions.handleAnimation({animation: true}));
        }, 10);     
               
      }, 500);
    }
  }, [position, product, dispatch]);

  useEffect(() => {
    setLoading(false);
  }, [product])

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <p>Product not ready</p>;
  }

  const addItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
    dispatch(
      toastifyActions.handleDisplayToastify("addItemToCart")
    );
  };
    //"flex justify-center items-center"
  return (
    <div className="flex justify-center items-center text-center">
      <div 
      className={`${animation ? activeImg : initialPosImg} transform transition-all duration-700`}
      style={{
        left: `${newPos.x}px`,
        top: `${newPos.y}px`,
        width: `${newPos.width}px`,
        height: `${newPos.height}px`,
        transform: `translateX(0) translateY(-20px) scaleX(${newPos.width/position.width}) scaleY(${newPos.height/position.height})`,
      }}
      >
        <img
          className="h-96 object-cover"
          src={`/pinchos/${product.image}`}
          alt={product.name}
        />
      </div>
      <div className={`${animation ? activeDes : initialPosDes} p-6 bg-white`}>
        <h2 className="text-2xl font-bold mb-2 ">{product.name}</h2>
        <p className="text-gray-600 mb-4 ">{product.description}</p>
        <p className="text-xl font-semibold text-green-600 mb-4 ">
          ${product.price}
        </p>
        <Button onClick={addItem}>Añadir al carrito</Button>
      </div>

    </div>
  );
};

export default ItemDetails;
