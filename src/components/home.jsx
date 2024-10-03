import { useNavigate } from "react-router-dom";
import Button from "./button";

const Home = () => {
    const navigate = useNavigate();
    return <div className="h-full">
        <h1>Decora tu jardin</h1>
        <Button classes="" onClick={() => navigate("shop")}>
            Ir a la tienda
        </Button>
    </div>
}

export default Home;