import React, { useContext, useState } from 'react';
import './ShopCategory.css';
import { ShopContext } from '../../../../FrontEnd1/src/context/ShopContext';
import dropdown from '../../components/assets/dropdown.png';
import Item from '../../../../FrontEnd1/src/components/Items/Item';
import MiddleNav from '../../components/middleNav/MiddleNav';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // State to control the number of visible products
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedTheme, setSelectedTheme] = useState(null);

  // Filter products based on the category and theme
  const filteredProducts = all_product.filter(item => {
    const categoryMatch = item.category === props.category;
    const themeMatch = selectedTheme ? item.theme === selectedTheme : true;
    return categoryMatch && themeMatch;
  });

  // Handle "Explore More" button click
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 12); // Show 12 more products
  };

  return (
    <div className='shop-category'>
      <div className="banner-container">
        <MiddleNav setSelectedTheme={setSelectedTheme} />
        <img className='shopcategory-banner' src={props.banner} alt='' />
      </div>
      
      

      <div className="shopcategory-products">
        {filteredProducts.slice(0, visibleCount).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <div className="shortcategory-indexSort">
        <p>
          <span>Showing {Math.min(visibleCount, filteredProducts.length)}</span> out of {filteredProducts.length} products
        </p>
       
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="shopcategory-loadmore" onClick={handleLoadMore}>
          Explore More
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
