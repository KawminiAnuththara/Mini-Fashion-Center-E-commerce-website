import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/shopCategory/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/login/LoginSignup.jsx';
import Footer from './components/footer/Footer.jsx';

import man_banner from '../src/components/assets/man_banner.png';
import women_banner from '../src/components/assets/women_banner.png';
import kid_banner from '../src/components/assets/kid_banner.png';
import { useUser } from '@clerk/clerk-react';
import GlobalStyles from './styles/GlobalStyles.jsx';
import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Themes.jsx';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'
import { useRef } from 'react';

function App() {
  const { isSignedIn } = useUser();
  const containerRef= useRef(null);

  return (
    <div ref={containerRef} data-scroll-container>
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
        options={{
          smooth:true,
        }}
        watch={
          [

          ]
        }
        containerRef={containerRef}
        >
      <GlobalStyles/>
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
      </LocomotiveScrollProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
