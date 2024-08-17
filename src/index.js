import {createRoot} from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./views/Home/Home";
import About from "./views/About/About";

const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },

    {
        path : "/about",
        element : <About/>
    }
])


root.render(
    <RouterProvider router={router}/>
);