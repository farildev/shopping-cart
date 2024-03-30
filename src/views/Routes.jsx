import Header from "@/layouts/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Favorites from "./Favorites";
const AppContainer = () => {
  return (
    <div>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </main>

    </div>
  )
}

export default AppContainer