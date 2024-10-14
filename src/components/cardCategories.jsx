import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';

import Button from './button'
import './cardCategories.css'
import ImagesCardCategories from './cardCategoriesImages/imagesCardCategories';
import { cardCategoriesActions } from '../store/cardCategoriesSlice';

const CardCategories = ({ name, image, id: catId }) => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(`../categories/${catId}`);
    }
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    const animation = useSelector(state => state.cardCategories)
    return (
        <div
            onMouseOver={() =>
                dispatch(cardCategoriesActions.handleAnimation(catId))
            }
            onMouseLeave={() =>
                dispatch(cardCategoriesActions.handleAnimation(""))
            }
        >
            {animation === catId ? (<div
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className={`action ${active ? 'active' : ''} h=52 max-w-md m-4 bg-grisCard justify-center font-playfair font-semibold shadow-md`}>
                <div className='mb-4 border-b-4 border-morao text-center'>
                    <p className='text-2xl font-lora mb-4 '>{name}</p>
                </div>
                <Button onClick={navigateHandler} classes="cardButton" >
                    Ver Mas
                </Button>
            </div>) : (<ImagesCardCategories catId={catId} image={image} />)}
        </div>
    )
}

export default CardCategories;