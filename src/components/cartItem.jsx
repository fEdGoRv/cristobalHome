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
    <div className="flex flex-row justify-center bg-stone-400">
      <div className='max-w-10' >
        <img src={`/pinchos/${image}`} alt="foti" />
      </div>
      <div className='flex' >
        <p className='w-96'>{name} -precio unitario: ${price} - </p>
        <div className='max-h-10' >
          <Button classes="cartItem" onClick={addItem} ><img src={plusIcon} alt='suma' /></Button>
        </div>
        <h6>{quantity}</h6>
        <div className='max-h-10' >
          <Button classes="cartItem" onClick={removeItem}><img src={lessIcon} alt='rsta' /></Button>
        </div>
        <p>Precio total: {totalPrice}</p>
      </div>
    </div>
  )
}

export default CartItem;