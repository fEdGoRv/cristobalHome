import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import lupa from '../util/icons/lupa.svg'
import Button from "./button";
import { cartActions } from "../store/cartSlice";
import { cardCategoriesActions } from "../store/cardCategoriesSlice";

const Card = ({ name, image, price, id: prodId }) => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      cartActions.addItemToCart({
        name,
        image,
        price,
        id: prodId,
      }),
    );
  };
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`prodDetail/${prodId}`);
  };
  const animation = useSelector((state) => state.cardCategories.animation);
   const active = useSelector((state) => state.cardCategories.active);
   const hiddenStyle = "opacity-0 pointer-events-none translate-y-60";
  const visibleStyle = "opacity-1 translate-y-48";
  
  return (
    <div 
    className="min-h-72"
    onMouseOver={() => {
      dispatch(cardCategoriesActions.handleAnimation(prodId))
    }}
    onMouseLeave={() => {
      dispatch(cardCategoriesActions.handleAnimation(""))
      dispatch(cardCategoriesActions.handleActive(false))
    }}
    onMouseEnter={() => dispatch(cardCategoriesActions.handleActive(true))}
    >
    <div
    className="w-64 h-full m-4 p-4 bg-cover bg-center"
    style={{backgroundImage: `url(/pinchos/${image})`}}
    >
      <div 
       className={`flex px-4 pb-4 pt-0 mt-2 transform transition-all duration-500 ${
        active && animation === prodId ? visibleStyle : hiddenStyle
       } `}
      >
        <Button onClick={showDetails} classes="white" type="button">
          <img className="max-w-8" src={lupa} alt="lupa" />
        </Button>
        <Button classes="white" onClick={addItem} type="button">
          AÑADIR AL CARRITO
        </Button>
      </div>
      </div>
    </div>
  );
};

export default Card;
