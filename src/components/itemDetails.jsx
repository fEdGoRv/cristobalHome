import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "./button";
import { cartActions } from "../store/cartSlice";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(false);

  const product = useSelector(state => state.modal.product);

  useEffect(()=>{
    if(product){
    setTimeout(() => {
      setAnimation(true);
    }, 800);
  }
  },[product])

  useEffect(()=>{
    setLoading(false);
  },[product])
    
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
  const activeImg = "transition-all translate-x-0 duration-500";
  const initialPosImg = "translate-x-80"; 
  const activeDes = "transition-all translate-x-0 duration-700 opacity-100";
  const initialPosDes = "-translate-x-80 opacity-0 w-2"
  return (
    <div className="flex justify-center">
    <div className={`${animation ? activeImg : initialPosImg} transform w-72`}>
      <img
        className="w-full h-96 object-cover"
        src={`/pinchos/${product.image}`}
        alt={product.name}
      />
      </div>
      <div className={`${animation ? activeDes : initialPosDes} p-6 bg-white`}>
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-green-600 mb-4">
          ${product.price}
        </p>
        <Button onClick={addItem}>Añadir al carrito</Button>
      </div>
    
    </div>
  );
};

export default ItemDetails;
