import Home from "./pages/Home"
import Layout from "./layouts/Layout"
import { Route, Routes, redirect } from "react-router-dom"
import FortuneCookie from "./pages/FortuneCookie"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    redirect("/")
  }, [])

  return <></>
}

export default App
