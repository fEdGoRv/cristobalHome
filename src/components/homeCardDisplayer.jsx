import CardCategories from './cardCategories';
import { catergories } from '../util/products';

const HomeCardDisplayer = () => {
   return (
    <div className="grid center">
        <div className="flex">
            <div className="h-46">
                <CardCategories 
                id={catergories[1].id}
                name={catergories[1].name}
                image={catergories[1].image}
                />
            </div>
            <div className="h-64">
                <CardCategories />
            </div>
            <div className="h-46">
                <CardCategories />
            </div>
        </div>
        <div className="flex">
            <div className="h-64">
                <CardCategories  />
            </div>
            <div className="h-46">
                <CardCategories />
            </div>
            <div className="h-64">
                <CardCategories />
            </div>
        </div>
    </div>
   )
}

export default HomeCardDisplayer;