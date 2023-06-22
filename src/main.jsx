import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { HeroesApp } from './HeroesApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
