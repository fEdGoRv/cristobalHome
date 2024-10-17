import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop from './components/shop';
import Home from './components/home';
import Main from './components/main';
import ProductsFilter from './components/productFilter';
import ItemDetails from './components/itemDetails';
import AboutUs from './components/aboutUs';
import Contact from './components/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: 'categories/:catId', element: <ProductsFilter /> },
      {
        path: 'categories/:catId/prodDetail/:prodId',
        element: <ItemDetails />,
      },
      { path: 'about', element: <AboutUs /> },
      { path: 'shop', element: <Shop /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
