import { useParams } from "react-router-dom"

import {products} from '../util/products';
import Products from "./products";

const ProductsFilter = () =>{
    const {id} = useParams();
    console.log(id)
    const listOfProd = products[id];
    return (
        <div>
            <Products products={listOfProd} />
        </div>
    );
}

export default ProductsFilter;