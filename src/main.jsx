import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import MyRoutes from './Router/MyRoutes'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyRoutes />
  </BrowserRouter>,
)
