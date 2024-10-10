import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from './button'

const CardCategories = ({ name, image, id: catId }) => {
    const [active, setActive] = useState(false)
    const navigate = useNavigate();
    const naviteHandler = () => {
        navigate(`../categories/${catId}`);
    }

    return (
        <div 
        className="max-w-md m-4 bg-grisCard font-playfair font-semibold shadow-md border-solid hover:opacity-25"
        onMouseOver={()=>{setActive(true)}}
        >
            <div className="relative h-56 m-2 overflow-hidden text-white rounded-md">
                <img src={`/pinchos/${image}`} alt={name} />
            </div>
            <div className={
                active ? "opcacity-1 transform translate-2rem " : "opacity-0 transform translate-0 "
            }>
                <h2>{name}</h2>
                <Button onClick={naviteHandler} classes="cardButton" >Ver Mas</Button>
            </div>
        </div>
    )
}

export default CardCategories;