import plusIcon from '../util/icons/suma.png';
import lessIcon from '../util/icons/resta.png'
import Button from './button';
import { cartActions } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { id, name, image, quantity, price, totalPrice } = props.item;
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(cartActions.addItemToCart({
      id,
      name,
      image,
      price
    }));
  }

  const removeItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  }

  return (
    <div className="flex flex-row bg-stone-400">
      <img src={image} alt="foti" />
      <p>{name} -precio unitario: ${price}- </p>
      <Button classes="cartItem" onClick={addItem} ><img src={plusIcon} alt='suma' /></Button>
      <h6>{quantity}</h6>
      <Button classes="cartItem" onClick={removeItem}><img src={lessIcon} alt='rsta' /></Button>
      <p>Precio total: {totalPrice}</p>
    </div>
  )
}

export default CartItem;