import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router";
import Product from "./Pages/Product";
import Loginsignup from "./Pages/Loginsignup";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Footer from "./component/Footer/Footer";
import banner_mens from "./component/assets/banner_mens.png"
import banner_womens from "./component/assets/banner_women.png"
import banner_kids from "./component/assets/banner_kids.png"

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/login" element={<Loginsignup />} />
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={banner_mens} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={banner_womens} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          
          
        </Routes>
        <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
