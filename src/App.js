import { RouterProvider } from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom'
import React, { Suspense } from 'react';

import Home from './components/home';
import Main from './components/main';
import ProductsFilter from './components/productFilter';
import AboutUs from './components/aboutUs';
import Contact from './components/contact';
import Help from './components/help';
import DetailProdPage from './components/detailProdPage';
import ErrorDisplayer from './components/error';
import Loader from './components/loader';


const Shop = React.lazy(() => import('./components/shop'));


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
