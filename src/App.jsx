import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}