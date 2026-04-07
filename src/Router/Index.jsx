import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import { lazy, Suspense } from "react";
import App from "../App";
import NotFound from "./NotFound";
import PlanComponents from "../Components/Plans/PlanComponents";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<p>Cargando...</p>}><App /></Suspense>,
        errorElement: <NotFound />
    },
    {
        path: "/Plan",
        element: <Suspense fallback={<p>Cargando...</p>}><PlanComponents /></Suspense>,
        errorElement: <NotFound />
    }
]);