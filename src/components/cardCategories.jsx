import { useNavigate } from 'react-router-dom'
import Button from './button'

const CardCategories = ({ name, image, id:catId }) => {
    const navigate = useNavigate();
    const naviteHandler = () => {
        navigate(`../categories/${catId}`);
    }

    return (
        <div className="max-w-md m-4 bg-white shadow-md rounded border-2 border-solid border hover:border-[#b65964]">
            <h2>{name}</h2>
            <div className="relative h-56 m-2 overflow-hidden text-white rounded-md">
                <img src={`/pinchos/${image}`} alt={name} />
            </div>
            <Button onClick={naviteHandler} classes="cardButton" >Ver Mas</Button>
        </div>
    )
}

export default CardCategories;