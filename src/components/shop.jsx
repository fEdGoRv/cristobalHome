import {products} from '../util/products';
import Card from './card';

const Shop = () =>{
   return(
     <div className='flex flex-wrap text-center justify-center bg-stone-500'>
        {products.map(prod => {
         return <Card 
         key={prod.id}
         id={prod.id}
         name={prod.name}
         price={prod.price}
         image={prod.image}
         description={prod.description}
         />
        })}
     </div>
   );
}

export default Shop;