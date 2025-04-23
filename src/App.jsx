import { lazy, Suspense } from 'react'
import './App.css'
import ButtonTop from './Components/ButtonTop'

const LazyWelcome = lazy(() => import('./Components/Welcome'))
const LazyPresentation = lazy(() => import("./Components/Presentation/Presentation"))
const LazyFooter = lazy(() => import("./Components/Footer/Footer"))

function App() {

  return (
    <>

        <Suspense fallback={<div>Cargando...</div>}>
            <LazyWelcome/>
            <LazyPresentation/>
            <LazyFooter/>
        </Suspense>
        

        <ButtonTop/>
    </>
  )
}

export default App
