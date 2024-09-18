import { 
  RouterProvider, 
  createBrowserRouter
} 
  from "react-router-dom";
import Shop from "./components/shop";
import Main from "./components/main";



const router = createBrowserRouter([
  {path:'/', 
   element: <Main />, 
   children:[
    {index: true, element: <Shop />},
   ]},
]);


function App() {
  return <RouterProvider router={router}/>
}
export default App;

