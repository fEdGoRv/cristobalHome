import { 
  RouterProvider, 
  createBrowserRouter
} 
  from "react-router-dom";
import Shop from "./components/shop";
import Main from "./components/main";
import ItemDetails from "./components/itemDetails";
import Products from "./components/products";
import ProductFilter from "./components/productFilter";



const router = createBrowserRouter([
  {path:'/', 
   element: <Main />, 
   children:[
    {index: true, element: <Shop />},
    {path: "categories",
       element: <ProductFilter />,
       children: [
        {path: ":id", element: <Products />},
        {path: "prodDetail/:id", element: <ItemDetails />}
       ]
      }, 
   ]},
]);


function App() {
  return <RouterProvider router={router}/>
}
export default App;

