import { useParams } from "react-router-dom";

import { products } from "../../util/products";
import Products from "./products";
import { useEffect, useState } from "react";

const ProductsFilter = () => {
  const { catId } = useParams();
  const [listOfProd, setListOfProd] = useState([]);
  useEffect(() => {
    const Prods = products[catId];
    setListOfProd(Prods);
  }, [catId]);

  return (
    <div>
      <Products products={listOfProd} />
    </div>
  );
};

export default ProductsFilter;
