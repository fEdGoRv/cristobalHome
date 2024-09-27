import { useNavigate } from 'react-router-dom'
import Button from './button'

const CardCategories = ({ name, image, id }) => {
    const navigate = useNavigate();
    const naviteHandler = () => {
        navigate(`categories/${id}`);
    }

    return (
        <div className="max-w-md m-4 shadow-md rounded border-solid border border-stone-800 bg-stone-500 hover:border-orange-600">
            <h2>{name}</h2>
            <div className="relative h-56  overflow-hidden text-white rounded-md">
                <img src={`/pinchos/${image}`} alt={name} />
            </div>
            <Button onClick={naviteHandler} classes="cardButton" >Ver Mas</Button>
        </div>
    )
}

export default CardCategories;