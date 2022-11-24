import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../layout/DashBoard";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Products from "../pages/home/Products/Products";
import Login from "../pages/Registration/Login";
import SignUp from "../pages/Registration/SignUp";
import PrivateRoute from "./PrivateRoute";



export const route = createBrowserRouter([
    {
        path: '/',
        errorElement: <p>404 not found</p>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            ,
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
            ,
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
    }
])