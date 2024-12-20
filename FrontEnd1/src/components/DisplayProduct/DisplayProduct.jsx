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
  const [showPopup, setShowPopup] = useState(false);
  const [reviews, setReviews] = useState([
    { id: 1, text: "Great product!", user: "John Doe", time: "2 hrs ago", likes: 3 },
    { id: 2, text: "Loved it!", user: "Jane Smith", time: "1 hr ago", likes: 5 },
  ]);
  const [newReview, setNewReview] = useState("");

  const images = [product.image1, product.image2, product.image3, product.image4, product.image];

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
    addToCart(product.id, quantity, selectedSize);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      setReviews([
        ...reviews,
        {
          id: Date.now(),
          text: newReview,
          user: user?.firstName || "Anonymous",
          profileImage: user?.profileImageUrl,
          time: "Just now",
          likes: 0,
        },
      ]);
      setNewReview("");
    }
  };

  const handleLikeReview = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id ? { ...review, likes: review.likes + 1 } : review
      )
    );
  };

  const handleDeleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
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
        <div className="productdisplay-right-star">
          {/* Star rating */}
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
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
        <div className="quantity-selector">
          <h2>Quantity</h2>
          <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        {showPopup && <div className="popup-message">Product added to the cart!</div>}
        <div className="review-section">
  <h2>Reviews</h2>
  <div className="reviews-container">
    {reviews.map((review) => (
      <div key={review.id} className="review-card">
        <div className="review-header">
          <img
            src={review.profileImage || "https://via.placeholder.com/50"}
            alt="User Profile"
            className="review-profile-icon"
          />
          <div className="review-user-details">
            <p className="review-user-name">{review.user}</p>
            <span className="review-time">{review.time}</span>
          </div>
        </div>
        <p className="review-text">{review.text}</p>
        <div className="review-actions">
          <button className="like-button" onClick={() => handleLikeReview(review.id)}>
            ❤️ {review.likes}
          </button>
          <button className="delete-button" onClick={() => handleDeleteReview(review.id)}>
            🗑️
          </button>
        </div>
      </div>
    ))}
  </div>
  <div className="review-input-container">
    <textarea
      className="review-input"
      placeholder="Write a review..."
      value={newReview}
      onChange={(e) => setNewReview(e.target.value)}
    ></textarea>
    <button className="submit-review-button" onClick={handleReviewSubmit}>
      Submit Review
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default DisplayProduct;
