import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
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
              
              
            </ul>
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
            <h4>Follow Us</h4>
            <div className="icons">
                <Link to="https://www.facebook.com/"><i className="fa fa-facebook fa-2x white" aria-hidden="true"></i></Link>
                <Link to="https://www.twitter.com/"><i className="fa fa-twitter fa-2x white" aria-hidden="true"></i></Link>
                <Link to="https://www.instagram.com/"><i className="fa fa-instagram fa-2x white" aria-hidden="true"></i></Link>
                </div>
          </div>
          <div className="footer-col">
            {/* <h4>Follow Us</h4>
            <div className="icons">
                <Link to="https://www.facebook.com/"><i className="fa fa-facebook fa-2x white" aria-hidden="true"></i></Link>
                <Link to="https://www.twitter.com/"><i className="fa fa-twitter fa-2x white" aria-hidden="true"></i></Link>
                <Link to="https://www.instagram.com/"><i className="fa fa-instagram fa-2x white" aria-hidden="true"></i></Link>
                </div> */}
            
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
