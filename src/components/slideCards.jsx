import { useEffect, useState } from "react";
import { allProd } from "../util/products";
import Card from './card';
import Button from "./button";
import left from "../util/icons/arrow<.svg";
import right from "../util/icons/arrow>.svg";
import { useDispatch } from "react-redux";
import { cardCategoriesActions } from "../store/cardCategoriesSlice";

const SlideCards = () => {
    const [displayingObjects, setDisplayingObject] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useDispatch();
    const cardsPerSlice = 3;


    const nextSlice = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + cardsPerSlice;
            return newIndex >= allProd.length ? 0 : newIndex;
        });
    }

    const lastSlice = () => {
        setCurrentIndex((prevIndex) => {
            const lastIndex = prevIndex - cardsPerSlice;
            return lastIndex <= 0 ? allProd.length : lastIndex;
        });
    }

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlice();
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setDisplayingObject(allProd.slice(currentIndex, cardsPerSlice + currentIndex));
    }, [currentIndex]);

    const styleCont = "flex m-auto mt-10 w-auto border-solid border-4 border-grisCard rounded-xl max-w-7xl";

    return (
        <div className={styleCont}>
            <div className="w-72 my-4 mx-8 text-left">
                <div className="my-4">
                    <h1 className="font-bold text-4xl">DISEÑO Y</h1>
                    <h1 className="font-bold text-4xl">ESTILO</h1>
                </div>
                <p className="my-8 text-stone-600">
                    Gran estilo directo de los fabricantes, diseño duradero y mano de obra fina. Tenemos un sin número de opciones a tu alcance, por lo que podes estar seguro de que estarás más que satisfecho con la compra.
                </p>
                <div className="my-6">
                    <Button classes="cardButton">
                        COMPRAR AHORA
                    </Button>
                </div>
            </div>
            <div 
            className="relative flex border-solid border-2 border-black "
            onMouseEnter={()=>dispatch(cardCategoriesActions.handleCarousel(true))}
            onMouseLeave={()=>dispatch(cardCategoriesActions.handleCarousel(false))}
            >
                <div className="fixed w-8 h-12 top-36 -left-4">
                    <Button classes="carousel" onClick={nextSlice}>
                        <img src={left} alt="left-arrow" />
                    </Button>
                </div>
                {displayingObjects.map(prod =>
                    <div key={prod.id} className="m-4">
                        <Card
                            id={prod.id}
                            name={prod.name}
                            price={prod.price}
                            image={prod.image}
                            description={prod.description}
                        />
                        <p>{prod.name}</p>
                    </div>)}
                <div className="fixed w-8 h-12 top-36 right-0">
                    <Button classes="carousel" onClick={lastSlice}>
                        <img src={right} alt="right-arrow" />
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default SlideCards;