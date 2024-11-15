import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop from './components/shop';
import Home from './components/home';
import Main from './components/main';
import ProductsFilter from './components/productFilter';
import AboutUs from './components/aboutUs';
import Contact from './components/contact';
import Help from './components/help';
import DetailProdPage from './components/detailProdPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: 'categories/:catId', element: <ProductsFilter /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'shop', element: <Shop /> },
      { path: 'contact', element: <Contact /> },
      { path: 'help', element: <Help />},
      { path: ':prodId', element: <DetailProdPage />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
