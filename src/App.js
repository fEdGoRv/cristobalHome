import {
  RouterProvider,
  createBrowserRouter
}
  from "react-router-dom";
import Shop from "./components/shop";
import Main from "./components/main";
import ProductsFilter from "./components/productFilter";
import ItemDetails from "./components/itemDetails";
import AboutUs from "./components/aboutUs";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, element: <Shop /> },
      { path: "categories/:catId", element: <ProductsFilter />},
      { path: "categories/:catId/prodDetail/:prodId", element: <ItemDetails/> },
      { path: "about", element: <AboutUs />}
    ]
  },

]);

function App() {
  return <RouterProvider router={router} />
}
export default App;

