import { useSelector } from "react-redux";

import CartItem from "./cartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="bg-grisCard text-center">
      <h1 className="text-2xl text-center text-morao rounded bg-stone-800">
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
      <div className="text-xl text-morao bg-stone-800 rounded ">
        Monto Total: {totalAmount}
      </div>
    </div>
  );
};

export default Cart;
