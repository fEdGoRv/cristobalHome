import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "./button";
import "./cardCategories.css";
import ImagesCardCategories from "./cardCategoriesImages/imagesCardCategories";
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
      className="h-full w-full"
    >
      {animation === catId ? (
        <div
          onMouseEnter={() => dispatch(cardCategoriesActions.handleActive(true))}
          onMouseLeave={() => dispatch(cardCategoriesActions.handleActive(false))}
          className="max-w-md m-4 bg-grisCard justify-center font-playfair shadow-md"
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
      ) : (
        <ImagesCardCategories catId={catId} image={image} />
      )}
    </div>
  );
};

export default CardCategories;
