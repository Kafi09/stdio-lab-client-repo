import Main from "../../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Reviews from "../../Pages/Reviews/Reviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import ServiceDataDetails from "../../Pages/Home/Services/ServiceDataDetails";
import Blog from "../../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://stdio-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/servicedatadetails',
                element: <PrivateRoute><ServiceDataDetails></ServiceDataDetails></PrivateRoute>
            },
            {
                path: '/servicedetail',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            }


        ]
    }
]);

export default router;