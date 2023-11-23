import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home.tsx"
import FortuneCookie from "./pages/FortuneCookie.tsx"
import NotFound from "./pages/NotFound.tsx"
import Layout from "./layouts/Layout.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/fortunecookie",
    element: <FortuneCookie />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
)
