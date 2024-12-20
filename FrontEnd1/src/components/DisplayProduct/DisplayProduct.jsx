import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useUser } from "@clerk/clerk-react"; // Clerk user hook
import './DisplayProduct.css';
import { ShopContext } from '../../context/ShopContext';

const DisplayProduct = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const { user } = useUser(); // Get the logged-in user details
  const [mainImage, setMainImage] = useState(product.image);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const images = [product.image1, product.image2, product.image3, product.image4, product.image];

  // Predefined colors
  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Green", hex: "#008000" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Pink", hex: "#FFC0CB" },
    { name: "Red", hex: "#FF0000" },
    { name: "Brown", hex: "#8B4513" },
    { name: "White", hex: "#FFFFFF" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setMainImage(images[(currentIndex + 1) % images.length]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart.");
      return;
    }
    if (!selectedColor) {
      alert("Please select a color before adding to the cart.");
      return;
    }
    addToCart(product.id, quantity, selectedSize, selectedColor);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onMouseEnter={() => setMainImage(img)}
            />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-image" src={mainImage} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
  <span className="star">&#9733;</span>
  <span className="star">&#9733;</span>
  <span className="star">&#9733;</span>
  <span className="star">&#9733;</span>
  <span className="star">&#9734;</span> {/* Empty star */}
  <span className="rating-text">4.0</span> {/* Average rating */}
</div>
        <p class="description">Made from high-quality cotton fabric, this shirt offers a soft feel and durability. It's easy to wash and designed for long-lasting wear, keeping its shape and comfort for years.</p>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-size-chart">
          <h2>Size Chart</h2>
          <table className="size-chart-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Bust (in)</th>
                <th>Height (in)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { size: "S", bust: 23, height: 30 },
                { size: "M", bust: 25, height: 32 },
                { size: "L", bust: 27, height: 34 },
                { size: "XL", bust: 29, height: 36 },
                { size: "XXL", bust: 31, height: 38 },
              ].map((row) => (
                <tr key={row.size}>
                  <td>{row.size}</td>
                  <td>{row.bust}</td>
                  <td>{row.height}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={`size-box ${selectedSize === size ? "selected" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="productdisplay-right-color">
          <h2>Select Color</h2>
          <div className="productdisplay-color-options">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`color-circle ${selectedColor === color.name ? "selected" : ""}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setSelectedColor(color.name)}
              ></div>
            ))}
          </div>
          {selectedColor && <div className="selected-color">Selected Color: {selectedColor}</div>}
        </div>


        <button onClick={handleAddToCart}>ADD TO CART</button>
        {showPopup && <div className="popup-message">Product added to the cart!</div>}
      </div>
    </div>
  );
};

export default DisplayProduct;
