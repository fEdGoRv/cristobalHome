import CardCategories from "./cardCategories";
import { categories } from "../util/products";

const HomeCardDisplayer = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-4" style={{gridAutoRows: '300px'}}>
      {categories.map((cat) => (
        <div key={cat.id} className={`relative row-span-${cat.rowSpan}` }>
          <CardCategories
            id={cat.id}
            name={cat.name}
            image={cat.image}
            desc={cat.desc}
          />
        </div>
      ))}
    </div>
  );
};

export default HomeCardDisplayer;
