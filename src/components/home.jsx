import { useNavigate } from "react-router-dom";
import Button from "./button";

const Home = () => {
    const navigate = useNavigate();

    return <div className="realative">
        <div>
            <h1 className="text-6xl text-morao font-bold font-cinzel">Renová</h1>
            <h1 className="text-6xl text-morao font-bold font-cinzel">tú</h1>
            <h1 className="text-6xl font-bold font-lobster">jardin</h1>
        </div>
        <div className="m-8">
            <Button onClick={() => navigate("shop")}>
                Ir a la tienda
            </Button>
        </div>
    </div>
}

export default Home;