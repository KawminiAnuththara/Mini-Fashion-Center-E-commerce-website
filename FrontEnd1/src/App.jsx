import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from '../../FrontEnd1/src/pages/Shop';
import ShopCategory from '../../FrontEnd1/src/pages/shopCategory/ShopCategory';
import Product from '../../FrontEnd1/src/pages/Product';
import Cart from '../../FrontEnd1/src/pages/Cart';
import LoginSignup from './pages/login/LoginSignup';
import Footer from './components/footer/Footer';

import man_banner from '../src/components/assets/man_banner.png';
import women_banner from '../src/components/assets/women_banner.png';
import kid_banner from '../src/components/assets/kid_banner.png';
import { useUser } from '@clerk/clerk-react';

function App() {
  const { isSignedIn } = useUser();

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Default page: Shop */}
          <Route path="/" element={<Shop />} />

          {/* Conditional rendering for protected routes */}
          {isSignedIn && (
            <>
              <Route path="/mens" element={<ShopCategory banner={man_banner} category="men" />} />
              <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
              <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
              <Route path="/product">
                <Route path=":productId" element={<Product />} />
              </Route>

              <Route path="/dress" element={<ShopCategory  theme="dress" />} />
              <Route path="/shoe" element={<ShopCategory  theme="shoe" />} />
              <Route path="/bag" element={<ShopCategory  theme="bag" />} />
              <Route path="/accessory" element={<ShopCategory  theme="accessory" />} />
              
              <Route path="/cart" element={<Cart />} />
            </>
          )}

          {/* Always accessible route */}
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
