import { RouterProvider } from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom'
import React, { Suspense } from 'react';

import Home from './components/pages/home';
import Main from './components/layout/main';
import ProductsFilter from './components/product/productFilter';
import AboutUs from './components/pages/aboutUs';
import Contact from './components/pages/contact';
import Help from './components/pages/help';
import DetailProdPage from './components/pages/detailProdPage';
import ErrorDisplayer from './components/pages/error';
import Loader from './components/loader';


const Shop = React.lazy(() => import('./components/product/shop'));


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorDisplayer />,
      children: [
        { index: true, element: <Home />,  },
        { path: 'categories/:catId', element: <ProductsFilter /> },
        { path: 'about', element: <AboutUs /> },
        { path: 'shop', element: <Suspense fallback={<Loader />}><Shop /></Suspense> },
        { path: 'contact', element: <Contact />},
        { path: 'help', element: <Help />},
        { path: ':prodId', element: <DetailProdPage />}
      ],
    },
  ]);


function App() {
 
  return <>
  <RouterProvider router={router} />
  </>;
}
export default App;
