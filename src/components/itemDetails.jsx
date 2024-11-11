import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "./button";
import { cartActions } from "../store/cartSlice";
import { modalActions } from "../store/modalSlice";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [lastPos, setLastPos] = useState({})

  const animation = useSelector(state => state.modal.animation);
  console.log(animation)
  const product = useSelector(state => state.modal.product);
  const position = useSelector(state => state.modal.position);
  const activeImg = "transition-all translate-x-0 tanslate-y-0 scale-x-110 scale-y-110 duration-700";
  let initialPosImg = "opacity-0";
  const activeDes = "transition-all translate-x-10 duration-700 opacity-100";
  const initialPosDes = "-translate-x-80 opacity-0 w-2"

  useEffect(() => {
    if (position && product) {
      const overlay = document.createElement('div');
      overlay.className = 'fixed bg-cover bg-center transfrom duration-500 trasition-all z-50';
      overlay.style.top = `${position.top}px`;
      overlay.style.left = `${position.left}px`;
      overlay.style.width = `${position.width}px`;
      overlay.style.height = `${position.height}px`;
      overlay.style.backgroundImage = `url(/pinchos/${product.image})`;

      document.body.appendChild(overlay);

      requestAnimationFrame(() => {
        overlay.style.top = '50%';
        overlay.style.left = '50%';
        overlay.style.transform = 'translate(-50%, -50%) scale(1.1)';
      });


      setTimeout(() => {
        const finalRect = overlay.getBoundingClientRect();
        document.body.removeChild(overlay);
        const position = {
          x: finalRect.x,
          y: finalRect.y,
          width: finalRect.width,
          height: finalRect.height
        }
        setLastPos({ position });
        initialPosImg = `opacity translate-x-${lastPos.x} scale-x-${lastPos.width} scale-y-${lastPos.height} translate-y-${lastPos.y}`;
        dispatch(modalActions.handleAnimation(true));
      }, 500);
    }
  }, [])

  useEffect(() => {
    setLoading(false);
  }, [product])

  if (loading) {
    return <p>Loading...</p>;
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
      }),
    );
  };

  return (
    <div className="flex justify-center">
      <div className={`${animation ? activeImg : initialPosImg} transform w-72`}>
        <img
          className="w-full h-96 object-cover"
          src={`/pinchos/${product.image}`}
          alt={product.name}
        />
      </div>
      <div className={`${animation ? activeDes : initialPosDes} p-6 bg-white items-center`}>
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
