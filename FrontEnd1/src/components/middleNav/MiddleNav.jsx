import React from 'react';
import './MiddleNav.css';

const MiddleNav = ({ setSelectedTheme }) => {

  // Handle theme selection
  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
  };

  window.addEventListener("scroll", function() {
    const middleNav = document.querySelector('.middle-nav');
    const footer = document.querySelector('.footer');
    const footerPosition = footer.getBoundingClientRect().top;
  
    // Check if the nav has reached the footer
    if (footerPosition <= window.innerHeight) {
      middleNav.style.position = 'absolute';
      middleNav.style.bottom = '0';  // Make it stop just before the footer
    } else {
      middleNav.style.position = 'fixed';
      middleNav.style.bottom = ''; // Reset bottom to allow scrolling
    }
  });
  

  return (
    <div className="middle-nav">
      <button onClick={() => handleThemeClick('dress')}>Dress</button>
      <button onClick={() => handleThemeClick('shoe')}>Shoe</button>
      <button onClick={() => handleThemeClick('accessory')}>Accessories</button>
      <button onClick={() => handleThemeClick('bag')}>Bags</button>
    </div>
  );
};

export default MiddleNav;
