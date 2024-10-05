import { useNavigate } from "react-router-dom";
import Button from "./button";

const Home = () => {
    const navigate = useNavigate();

    return <div>

        <h1>Decora tu jardin</h1>

        <Button onClick={() => navigate("shop")}>
            Ir a la tienda
        </Button>
    </div>
}

export default Home;