import Card from "./card";

const Products = ({ products }) => {
  return (
    <div className="min-h-[600px]">
    <div className="flex flex-wrap text-center justify-center">
      {products.map((prod) => {
        return (
          <Card
            key={prod.id}
            id={prod.id}
            name={prod.name}
            price={prod.price}
            image={prod.image}
            description={prod.description}
          />
        );
      })}
    </div>
    </div>
  );
};

export default Products;
