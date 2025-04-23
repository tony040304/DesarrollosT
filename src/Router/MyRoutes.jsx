import React, { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom"
import App from '../App'


const LazyLanding = lazy(() => import('../Components/Pages/LandingPage'))
const LazySoftware = lazy(() => import('../Components/Pages/SoftwarePage'))
const LazyFullStack = lazy(() => import('../Components/Pages/FullStackPage'))
const LazyCommunitiM = lazy(() => import('../Components/Pages/CommunityManagerPage'))

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/landingPage" element={<Suspense fallback={<div>Cargando...</div>}><LazyLanding /></Suspense>} />
      <Route path="/Software" element={<Suspense fallback={<div>Cargando...</div>}><LazySoftware /></Suspense>} />
      <Route path="/FullStack" element={<Suspense fallback={<div>Cargando...</div>}><LazyFullStack /></Suspense>} />
      <Route path="/CommunityManager" element={<Suspense fallback={<div>Cargando...</div>}><LazyCommunitiM /></Suspense>} />
    </Routes>
  )
}

export default MyRoutes