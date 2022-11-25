import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../layout/DashBoard";
import Main from "../layout/Main";
import AddProducts from "../pages/DashBoard/AddProducts/AddProducts";
import Allseller from "../pages/DashBoard/Allseller/Allseller";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import MyOrders from "../pages/DashBoard/My Orders/MyOrders";
import MyProducts from "../pages/DashBoard/MyProducts/MyProducts";
import ReportedItems from "../pages/DashBoard/ReportedItems/ReportedItems";
import Home from "../pages/home/Home/Home";
import Products from "../pages/home/Products/Products";
import Login from "../pages/Registration/Login";
import SignUp from "../pages/Registration/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";



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
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            }
            ,
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            }
            ,
            {
                path: '/dashboard/addProducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><Allseller></Allseller></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            }
        ]
    }
])