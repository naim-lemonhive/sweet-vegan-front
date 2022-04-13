import React from "react"
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa"
import image from "../../../images/logo.png"
import "./Footer.css"
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div className="footerWrapper">
            <div className="col-1">
              <div className="shortdes">
                <img src={image} alt="" height="50px" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley .
                </p>
              </div>
            </div>
            <div className="col-2">
              <div>
                <ul>
                  <li>Home</li>
                  <li>Product</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <li>Privacy</li>
                  <li>News</li>
                  <li>Contact Policey</li>
                  <li>Privacy Policey</li>
                </ul>
              </div>
              <div className="col-4">
                <ul>
                  <li>Privacy</li>
                  <li>News</li>
                  <li>Contact Policey</li>
                  <li>Privacy Policey</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy_social_link_section">
        <div className="copy_social_link_container">
          <div className="copy">
            &copy; 2022 SweetVegan. All rights reserved
          </div>
          <div className="social_links">
            <ul>
              <li>
                <FaFacebookF color="#fff" />
              </li>
              <li>
                <FaPinterestP color="#fff" />
              </li>
              <li>
                <FaInstagram color="#fff" />
              </li>
              <li>
                <FaYoutube color="#fff" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
