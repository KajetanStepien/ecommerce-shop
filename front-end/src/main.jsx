import "./styles/theme.css";
import "./styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { Favourites } from "./views/Favourites/Favourites.jsx";
import { Cart } from "./views/Cart/Cart.jsx";
import { ProductsList } from "./views/ProductsList/ProductsList.jsx";
import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { mainPageLoader } from "./api/mainPageLoader.js";
import { productListLoader } from "./api/productListLoader.js";
import { productDetailsLoader } from "./api/productDetailsLoader.js";
import { favouritesLoader } from "./api/favouritesLoader.js";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/favourites",
        element: <Favourites />,
        loader: favouritesLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender/:category/:subcategory?",
        element: <ProductsList />,
        loader: productListLoader,
      },
      {
        path: "/:gender/:category/:subcategory/:productId",
        element: <ProductDetails />,
        loader: productDetailsLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
