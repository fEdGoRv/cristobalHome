import { useDispatch, useSelector } from "react-redux";

import CartItem from "./cartItem";
import Button from "./generals/button";
import { modalActions } from "../store/modalSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const dispatch = useDispatch();
  const handleConfirmation = () => {
    dispatch(modalActions.handleFormModalHandler());
  }

  return (
    <div className="text-center">
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
      <Button onClick={handleConfirmation}>
        CONFIRMA PEDIDO
      </Button>
    </div>
  );
};

export default Cart;
