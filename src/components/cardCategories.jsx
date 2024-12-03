import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "./generals/button";
import "../styles/cardCategories.css";
import ImagesCardCategories from "./imagesCardCategories";
import { cardCategoriesActions } from "../store/cardCategoriesSlice";

const CardCategories = ({ name, image, id: catId, desc }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`../categories/${catId}`);
  };
  
  const dispatch = useDispatch();
  const animation = useSelector((state) => state.cardCategories.animation);
  const active = useSelector((state) => state.cardCategories.active);
  return (
    <div
      onMouseOver={() => dispatch(cardCategoriesActions.handleAnimation(catId))}
      onMouseLeave={() => dispatch(cardCategoriesActions.handleAnimation(""))}
    >
      <div className={`${animation === catId && "opacity-50"}`}>
      <ImagesCardCategories catId={catId} image={image} />
      </div>
      {animation === catId &&
        <div
          onMouseEnter={() => dispatch(cardCategoriesActions.handleActive(true))}
          onMouseLeave={() => dispatch(cardCategoriesActions.handleActive(false))}
          className={`absolute inset-0 flex flex-col text-center justify-center items-center bg-grisCard bg-opacity-50 text-black transition-opacity duration-300 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <p className={`action ${active ? "active" : ""} m-4`}>{desc}</p>
            <p className={`action ${active ? "active" : ""} text-2xl font-semibold font-lora mb-4 `}>{name}</p>
            <div className={`action ${active ? "active" : ""} mb-4 m-auto border-b-2 w-16 border-morao text-center`}></div>
            <Button onClick={navigateHandler} classes="cardCatButton">
              Ver Mas
            </Button>
          </div>
        </div>
        }
    </div>
  );
};

export default CardCategories;
