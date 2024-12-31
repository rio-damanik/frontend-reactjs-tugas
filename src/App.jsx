import React from 'react';
import './App.css';
import HomeView from './components/HomeView';

const App = () => {
  return (
    <div id="app">
      <header className="header">
        <div className="top-bar">
          <div className="left">
            <a href="#" className="download-app">
              <img src={require('./assets/Vectorfinal project FE Sisko.png')} alt="Mobile" />
              Download Arshion App
            </a>
          </div>
          <div className="right">
            <a href="#" className="help">
              <img src={require('./assets/Helpfinal project FE Sisko.png')} alt="Help" />
              Help
            </a>
            <div className="language">
              <img src={require('./assets/Globefinal project FE Sisko.png')} alt="Language" />
              Language English
            </div>
            <div className="auth-links">
              <a href="#" className="sign-in">Sign in</a>
              <span>|</span>
              <a href="#" className="sign-up">Sign Up</a>
            </div>
          </div>
        </div>

        <nav className="main-nav">
          <div className="logo">
            <img src={require('./assets/Logofinal project FE Sisko.png')} alt="ARSHION" />
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link">MEN</a>
            <a href="#" className="nav-link">WOMEN</a>
            <a href="#" className="nav-link">KIDS</a>
          </div>
          <div className="nav-icons">
            <img src={require('./assets/Searchfinal project FE Sisko.png')} alt="Search" />
            <img src={require('./assets/Favoritefinal project FE Sisko.png')} alt="Favorites" />
            <img src={require('./assets/Shopfinal project FE Sisko.png')} alt="Cart" />
            <img src={require('./assets/Accountfinal project FE Sisko.png')} alt="Account" />
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>DISCOUNT UP TO 50%</h1>
            <p>From September 30, 2023 - October 25, 2023</p>
          </div>
        </section>
        <HomeView />
      </main>
    </div>
  );
};

export default App;
