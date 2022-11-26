import { createBrowserRouter } from "react-router-dom";
import ErrorRoute from "../ErrorRoute/ErrorRoute";
import DashBoard from "../layout/DashBoard";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import AddProducts from "../pages/DashBoard/AddProducts/AddProducts";
import Allseller from "../pages/DashBoard/Allseller/Allseller";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import MyOrders from "../pages/DashBoard/My Orders/MyOrders";
import MyProducts from "../pages/DashBoard/MyProducts/MyProducts";
import Payment from "../pages/DashBoard/Payment/Payment";
import ReportedItems from "../pages/DashBoard/ReportedItems/ReportedItems";
import Home from "../pages/home/Home/Home";
import Products from "../pages/home/Products/Products";
import Login from "../pages/Registration/Login";
import SignUp from "../pages/Registration/SignUp";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";



export const route = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorRoute></ErrorRoute>,
        element: <Main></Main>,
        children: [

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
                loader: ({ params }) => fetch(`https://assignment-12-server-sable.vercel.app/category/${params.id}`),
            }
            ,
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorRoute></ErrorRoute>,
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
            },
            {
                path: 'dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({ params }) => fetch(`https://assignment-12-server-sable.vercel.app/orders/${params.id}`)
            }
        ]
    }
])