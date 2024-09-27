import {catergories} from '../util/products';
import CardCategories from './cardCategories';

const Shop = () =>{
   return(
     <div className='flex flex-wrap text-center justify-center bg-stone-500'>
        {catergories.map(cat => {
         return <CardCategories 
         key={cat.id}
         id={cat.id}
         name={cat.name}
         image={cat.image}
         />
        })}
     </div>
   );
}

export default Shop;