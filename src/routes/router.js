import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import Main from "../layouts/main/Main";
import ProductDetails from "../pages/details/ProductDetails";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Details from "../pages/details/Details";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: 'productDetails/:id',
            element: <Details />
         },
         {
            path: 'login',
            element: <Login />
         },
         {
            path: 'signup',
            element: <Signup />
         }
      ]
   }
]);

export default router;