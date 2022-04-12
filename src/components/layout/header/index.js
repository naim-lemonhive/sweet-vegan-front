import React, { useState } from "react"
import { Link } from "gatsby"
import { FaTimes, FaBars } from "react-icons/fa"
import logo from '../../../images/logo.png';
import "./header.css";

function Header() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <>
      <header className="siteheader" onClick={handleClick}>
        <div id="siteHeaderInner" className="siteHeaderContainer">
          <div className="wrapInner">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                height="50px"
                style={{ backgroundSize: "contain" }}
              />
            </Link>
            <div type="button" className="menuicon" onClick={handleClick}>
              {click ? (
                <FaTimes size={30} color="black" />
              ) : (
                <FaBars color="black" size={30} />
              )}
            </div>
            <div className={click ? "topnav active" : "topnav"} id="myTopnav">
              <Link href="/">
                <a className="homeText">Home</a>
              </Link>
              <Link href="/">
                <a className="homeText">Products</a>
              </Link>
              <Link href="/">
                <a className="homeText">About</a>
              </Link>
              <Link href="/">
                <a className="homeText">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
