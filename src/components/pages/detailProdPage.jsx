import { useParams } from "react-router-dom";
import { allProd } from "../../util/products"
import Button from "../generals/button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { toastifyActions } from "../../store/toastifySlice";


const DetailProdPage = () => {

    const {prodId} = useParams(); 
    const dispatch = useDispatch();
    const prod = allProd.find(item => item.id === prodId);
    const handleAddToCart = () =>{
       dispatch(cartActions.addItemToCart({
         id: prod.id,
         name: prod.name,
         price: prod.price,
         image: prod.image
       }));
       dispatch(toastifyActions.handleDisplayToastify("addItemToCart"));
    }

    return (
        <div className="bg-grisCard m-auto mt-2 font-josefin w-96 justify-center text-center ">
            <div className="">
                <img src={`/pinchos/${prod.image}`} alt={`${prod.name}`} />
            </div>
            <div className="">
                <h2 className="text-morao text-lg m-2 font-bold">{prod.name}</h2>
                <p>{prod.description}</p>
            </div>
            <div className="my-2">
            <Button onClick={handleAddToCart}>AÑADIR AL CARRITO</Button>
            </div>
        </div>
    );
}

export default DetailProdPage;

