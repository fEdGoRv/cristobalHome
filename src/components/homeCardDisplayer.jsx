import CardCategories from "./cardCategories";
import { catergories } from "../util/products";

const HomeCardDisplayer = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 h-screen center">
      {catergories.map((cat) => (
        <div key={cat.id}>
          <CardCategories id={cat.id} name={cat.name} image={cat.image} />
        </div>
      ))}
    </div>
  );
};

export default HomeCardDisplayer;
