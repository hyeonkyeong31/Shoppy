import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import NewProduct from "./pages/NewProduct";
import MyCart from "./pages/MyCart";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        /* App이라는 부모 컴포넌트 안에 아울렛을 사용해서 children을 보여줄것임 */
        children: [
            { index: true, path: "/", element: <Home /> },
            { path: "/products", element: <AllProducts /> },
            {
                path: "/products/new",
                element: (
                    <ProtectedRoute requireAdmin>
                        <NewProduct />
                    </ProtectedRoute>
                ),
            },
            { path: "/products/:id", element: <ProductDetail /> },
            {
                path: "/carts",
                element: (
                    <ProtectedRoute>
                        <MyCart />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
