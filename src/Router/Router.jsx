import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Catalog from "../Pages/Catalog/Catalog";
import Likes from "../Pages/Likes/Likes";
import MyBooks from "../Pages/My books/MyBooks";
import Order from "../Pages/Order/Odrer";
import Layout from "../Pages/Layout";

export const router = createBrowserRouter([
    {
        path: "/"   ,
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'catalog',
                element: <Catalog />
            },
            {
                path: 'likes',
                element: <Likes />

            },
            {
                path: 'mybooks',
                element: <MyBooks />
            },
            {
                path: 'order',
                element: <Order />
            },
        ],
    },
]);