import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaTimes, FaBars } from "react-icons/fa"
import "./header.css"
import { GatsbyImage } from "gatsby-plugin-image"

function Header() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  // fetch data ===============================
  const data = useStaticQuery(graphql`
    {
      allSanityHomePage {
        nodes {
          pageContent {
            ... on SanityPageHeaderSection {
              _key
              _type
              logo {
                asset {
                  gatsbyImageData
                }
              }
              navItemInfo {
                pageLink
                pageTitle
              }
            }
          }
        }
      }
    }
  `)
  const navData = data.allSanityHomePage.nodes[0].pageContent[0]
  return (
    <>
      <header className="siteheader" onClick={handleClick}>
        <div id="siteHeaderInner" className="siteHeaderContainer">
          <div className="wrapInner">
            <Link to="/">
              <GatsbyImage
                image={navData.logo.asset.gatsbyImageData}
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
              {navData.navItemInfo.map(ele => (
                <Link
                  key={ele.pageTitle}
                  href={ele.pageLink ? `/${ele.pageLink}` : "/"}
                >
                  <a className="homeText">{ele.pageTitle}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
