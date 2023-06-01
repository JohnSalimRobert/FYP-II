import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h2>Company</h2>
            <div className="footer-p">
              <p>
                Shop your heart out with Wishlist! Our ecommerce website offers
                a wide range of products at affordable prices. From clothing to
                electronics, we have it all. With our easy-to-use website and
                fast shipping, you can get everything you need in just a few
                clicks. Plus, our customer service team is always here to help
                you with any questions or concerns you may have. So why wait?
                Start shopping today and make your wishlist a reality with
                Wishlist!
              </p>
              
              
            </div>
          </div>
          <div className="footer-col">
            {/* <h4>Get Help</h4>
            <ul>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping</Link>
              </li>
              <li>
                <Link to="/returns">Returns</Link>
              </li>
            </ul> */}
            <h2>Follow Us</h2>
            <div className="icons">
                <Link to="https://www.facebook.com/"><i className="fa fa-facebook fa-3x white" aria-hidden="true"></i></Link>
                <Link to="https://www.twitter.com/"><i className="fa fa-twitter fa-3x white" aria-hidden="true"></i></Link>
                <Link to="https://www.instagram.com/"><i className="fa fa-instagram fa-3x white" aria-hidden="true"></i></Link>
                </div>
          </div>
          <div className="footer-col">
            <h2>About Us</h2>
            <div className="footer-p">
            <div>
            <iframe src="https://www.youtube.com/embed/hHqW0gtiMy4?autoplay=1&controls=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
              <p><strong>Address:</strong> 7921 Jamel Mountain, Suite 327, 59065-4404, North Burnice, Alaska, United States</p>
              <p><strong>UAN:</strong> 423967399765 </p>
                </div>
                </div>
          </div>
        </div>

        <div className="footer-row center">
          <p> All Rights Reserved. &copy; 2023 WishList Website. </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
