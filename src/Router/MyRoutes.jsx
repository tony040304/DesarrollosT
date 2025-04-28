import React, { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom"
import App from '../App'
import Charging from './Charging'

const LazyApp = lazy(() => import('../App'))
const LazyLanding = lazy(() => import('../Components/Pages/LandingPage'))
const LazySoftware = lazy(() => import('../Components/Pages/SoftwarePage'))
const LazyFullStack = lazy(() => import('../Components/Pages/FullStackPage'))
const LazyCommunitiM = lazy(() => import('../Components/Pages/CommunityManagerPage'))

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<Charging/>}><LazyApp /></Suspense>} />
      <Route path="/landingPage" element={<Suspense fallback={<Charging/>}><LazyLanding /></Suspense>} />
      <Route path="/Software" element={<Suspense fallback={<Charging/>}><LazySoftware /></Suspense>} />
      <Route path="/FullStack" element={<Suspense fallback={<Charging/>}><LazyFullStack /></Suspense>} />
      <Route path="/CommunityManager" element={<Suspense fallback={<Charging/>}><LazyCommunitiM /></Suspense>} />
    </Routes>
  )
}

export default MyRoutes