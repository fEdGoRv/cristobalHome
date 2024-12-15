import plusIcon from "../util/icons/suma.png";
import lessIcon from "../util/icons/resta.png";
import Button from "./generals/button";
import { cartActions } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { id, name, image, quantity, price, totalPrice } = props.item;
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        image,
        price,
      }),
    );
  };

  const removeItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div className="flex flex-row place-items-center justify-center">
      <div className="max-w-10">
        <img src={`/pinchos/${image}`} alt="foti" />
      </div>
      <div className="flex">
        <p className="flex w-96 place-items-center">
          {name} -precio unitario: ${price} -{" "}
        </p>
        <div className="max-h-10">
          <Button classes="cartItem" onClick={addItem}>
            <img src={plusIcon} alt="suma" />
          </Button>
        </div>
        <h6 className="flex place-items-center">{quantity}</h6>
        <div className="max-h-10">
          <Button classes="cartItem" onClick={removeItem}>
            <img src={lessIcon} alt="rsta" />
          </Button>
        </div>
        <p className="flex place-items-center">Precio total: {totalPrice}</p>
      </div>
    </div>
  );
};

export default CartItem;
