import { createBrowserRouter } from "react-router-dom";
import Home from "@/views/Home";
import Cart from "@/views/Cart";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <Home />
    },
    {
        path : '/cart',
        element : <Cart />
    }
])

export default routes
