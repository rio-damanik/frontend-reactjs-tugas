import React from 'react';
import './HomeView.css';

const HomeView = () => {
  const categories = [
    { name: 'TSHIRT', image: require('../assets/tshirt.jpg') },
    { name: 'GLASSES', image: require('../assets/glasses.jpg') },
    { name: 'JACKET', image: require('../assets/jacket.jpg') },
    { name: 'SHOES', image: require('../assets/shoes.jpg') },
    { name: 'SANDALS', image: require('../assets/sandals.jpg') },
    { name: 'DRESS', image: require('../assets/dress.jpg') },
    { name: 'TROUSERS', image: require('../assets/trousers.jpg') },
    { name: 'HAT', image: require('../assets/hat.jpg') },
    { name: 'SHIRT', image: require('../assets/shirt.jpg') }
  ];

  const newArrivals = [
    {
      name: 'INCERUN Men Casual Chinese Style',
      price: 126000,
      image: require('../assets/chinese-shirt.jpg')
    },
    {
      name: 'INCERUN Men Casual Chinese Style',
      price: 126000,
      image: require('../assets/chinese-shirt.jpg')
    },
    {
      name: 'INCERUN Men Casual Chinese Style',
      price: 126000,
      image: require('../assets/chinese-shirt.jpg')
    }
  ];

  return (
    <div className="home">
      <section className="new-arrival">
        <h1 className="title">NEW ARRIVAL!!</h1>
        <h2 className="subtitle">Summer Special Edition</h2>
        <div className="products-grid">
          {newArrivals.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">Rp {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="special-edition">
        <div className="bundle-grid">
          <div className="bundle-image">
            <img src={require('../assets/bundle-outfit.jpg')} alt="Bundle Grey Jean" />
          </div>
          <div className="bundle-info">
            <h2 className="special-title">Special Edition!!</h2>
            <h3 className="bundle-name">Bundle: Grey Jean, White Shirt, & Brown Boots</h3>
            <p className="bundle-price">Rp 1.300.000.00</p>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>

        <div className="bundle-grid reverse">
          <div className="bundle-info">
            <h2 className="special-title">Special Edition!!</h2>
            <h3 className="bundle-name">Bundle: Grey Jean, White Shirt, & Brown Boots</h3>
            <p className="bundle-price">Rp 1.300.000.00</p>
            <button className="buy-now">Buy Now</button>
          </div>
          <div className="bundle-image">
            <img src={require('../assets/bundle-outfit.jpg')} alt="Bundle Grey Jean" />
          </div>
        </div>
      </section>

      <section className="categories">
        <h1 className="title">CATEGORIES</h1>
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.name} className="category-card">
              <div className="image-container">
                <img src={category.image} alt={category.name} />
                <div className="category-name">{category.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="location-store">
        <div className="store-container">
          <div className="store-header">
            <h1 className="store-title">Location Store</h1>
            <img src="../assets/arshion-logo.png" alt="ARSHION" className="store-logo" />
          </div>
          <div className="store-locations">
            <div className="location">
              <h2>Jakarta</h2>
              <p>Jakarta Selatan - Jl. Fatmawati No.07</p>
            </div>
            <div className="location">
              <h2>Bandung</h2>
              <p>Bandung Selatan - Jl. Cibaduyut No.22</p>
            </div>
            <div className="location">
              <h2>Yogyakarta</h2>
              <p>Kota Yogyakarta - Jl. Malioboro No.10</p>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <div className="store-container">
          <div className="store-footer">
            <div className="footer-section">
              <h3>Come To Join</h3>
              <div className="email-signup">
                <input type="email" placeholder="Email" className="email-input" />
                <button className="submit-btn">Submit</button>
              </div>
              <p className="terms">By submitting your email address, you agree to receive marketing emails from ARSHION and accept our terms & conditions and privacy policy.</p>
            </div>
            <div className="footer-section">
              <h3>About Arshion</h3>
              <ul>
                <li><a href="#home">Information</a></li>
                <li><a href="#home">Store location</a></li>
                <li><a href="#home">Partnerships</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="#home">FAQ</a></li>
                <li><a href="#home">Payment Method</a></li>
                <li><a href="#home">Privacy Policy</a></li>
                <li><a href="#home">Contact Me</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow me</h3>
              <div className="social-icons">
                <a href="#home"><i className="fab fa-instagram"></i></a>
                <a href="#home"><i className="fab fa-facebook"></i></a>
                <a href="#home"><i className="fab fa-twitter"></i></a>
                <a href="#home"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p> 2023 ARSHION. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
