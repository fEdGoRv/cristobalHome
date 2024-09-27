import { useParams } from "react-router-dom";
import { products } from "../util/products";
import { useDispatch } from "react-redux";

import Button from "./button";
import { cartActions } from "../store/cartSlice";

const ItemDetails = () => {
  
  const {id} = useParams();
  const product = products.pinchos.find(item => item.id === id);
  //className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }))
  }
    

    return (
        <div className=" m-6 max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={product.image}
            alt={product.name}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-green-600 mb-4">
              ${product.price}
            </p>
            <Button onClick={addItem}>
              Añadir al carrito
            </Button>
          </div>
        </div>
      );
}

export default ItemDetails;