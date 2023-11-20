import Home from "./pages/Home"
import Layout from "./layouts/Layout"
import { Routes, Route } from "react-router-dom"
import FortuneCookie from "./pages/FortuneCookie"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/fortuneCookie" element={<FortuneCookie />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
