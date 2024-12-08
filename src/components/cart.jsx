import { useDispatch, useSelector } from "react-redux";

import CartItem from "./cartItem";
import Button from "./generals/button";
import { modalActions } from "../store/modalSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const dispatch = useDispatch();
  const handleConfirmation = () => {
    dispatch(modalActions.handleFormModalHandler());
  }

  return (
    <div className="text-center">
      {totalQuantity < 10 &&
        <div className="m-2 text-center text-morao font-josefin font-bold text-xl">
          <p>El minimo son 10 articulos,</p>
          <p>deberias agregar {10 - totalQuantity} para realizar tu pedido.</p>
        </div>
      }
      <h1 className="text-2xl text-center text-morao bg-grisCard">
        Tu carrito
      </h1>
      <ul>
        {cart.map((item) => {
          return (
            <li className="justify-center" key={item.id}>
              <CartItem
                item={{
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  price: item.price,
                  quantity: item.quantity,
                  totalPrice: item.totalPrice,
                }}
              />
            </li>
          );
        })}
      </ul>
      <div className="text-2xl p-2 w-full m-auto text-morao bg-grisCard">
        Monto Total: {totalAmount}
      </div>
      {totalQuantity >= 10 &&
        <Button onClick={handleConfirmation}>
          CONFIRMA PEDIDO
        </Button>}
    </div>
  );
};

export default Cart;
