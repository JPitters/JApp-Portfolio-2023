import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Jordan Pitters</h1>
        <p>A new Software Engineer exploring his options.</p>
        <button>Get to Know me</button>
      </div>
      <div className="features">
        <div className="feature">
          <i className="fas fa-rocket"></i>
          <h2>Fast and Responsive</h2>
          <p>Our app is built with the latest web technologies to provide a fast and responsive user experience.</p>
        </div>
        <div className="feature">
          <i className="fas fa-cog"></i>
          <h2>Customizable</h2>
          <p>Customize your experience with a variety of themes, fonts, and settings to suit your preferences.</p>
        </div>
        <div className="feature">
          <i className="fas fa-heart"></i>
          <h2>Designed with Love</h2>
          <p>Our team of designers and developers have poured their hearts into crafting a beautiful and intuitive app.</p>
        </div>
      </div>
    </div>
  )
}

export default Home