import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import { lazy, Suspense } from "react";
import App from "../App";
import NotFound from "./NotFound";
import PlanCM from "../Components/Plans/PlansDivided/PlanCM";
import PlanWeb from "../Components/Plans/PlansDivided/PlanWeb";
import PlanEdicion from "../Components/Plans/PlansDivided/PlanEdicion";
import PlanFoto from "../Components/Plans/PlansDivided/PlanFoto";
import PlanCustom from "../Components/Plans/PlanCustom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<p>Cargando...</p>}><App /></Suspense>,
        errorElement: <NotFound />
    },
    {
        path: "/PlanCM",
        element: <Suspense fallback={<p>Cargando...</p>}><PlanCM /></Suspense>,
        errorElement: <NotFound />
    },
    {
        path: "/PlanFoto",
        element: <Suspense fallback={<p>Cargando...</p>}><PlanFoto /></Suspense>,
        errorElement: <NotFound />
    },
    {
        path: "/PlanEdicion",
        element: <Suspense fallback={<p>Cargando...</p>}><PlanEdicion /></Suspense>,
        errorElement: <NotFound />
    },
    {
        path: "/PlanWeb",
        element: <Suspense fallback={<p>Cargando...</p>}><PlanWeb /></Suspense>,
        errorElement: <NotFound />
    },
    {
        path: "/custom-plan",
        element: <Suspense fallback={<p>Cargando...</p>}><PlanCustom /></Suspense>,
        errorElement: <NotFound />
    }
]);