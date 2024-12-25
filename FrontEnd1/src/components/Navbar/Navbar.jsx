import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import bgim_black from "../assets/bgim_black.png";
import shopping_cart from "../assets/shopping_cart.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../../FrontEnd1/src/context/ShopContext";
import down_arrow from "../assets/downarrow.png";
import { UserButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open"); // Fixed the typo here
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={bgim_black} alt="" />
      </div>
      <img
        className="nav-menuimage"
        onClick={dropdown_toggle}
        src={down_arrow}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <motion.li
          initial={{ transform: "translateX(-100px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring" }}
          onClick={() => setMenu("shop")}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : null}
        </motion.li>
        <motion.li
          initial={{ transform: "translateX(-100px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring" }}
          onClick={() => setMenu("mens")}
          >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Mens
          </Link>
          {menu === "mens" ? <hr /> : null}
        </motion.li>
        <motion.li
          initial={{ transform: "translateX(-100px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring" }}
          onClick={() => setMenu("womens")}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : null}
        </motion.li>
        <motion.li
          initial={{ transform: "translateX(-100px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring" }}
          onClick={() => setMenu("kids")}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : null}
        </motion.li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={shopping_cart} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <div className="logimage">
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
