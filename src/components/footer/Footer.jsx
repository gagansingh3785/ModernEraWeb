import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Modern Era Web</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer_link">Testimonials</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="" className="footer_social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/modern_era_devs/" className="footer_social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="" className="footer_social-link" target="_blank">
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer_copy">
                &#169; ModernEraWeb. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer