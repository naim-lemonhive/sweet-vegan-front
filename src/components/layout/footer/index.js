import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa"
import "./Footer.css"
function Footer() {
  const data = useStaticQuery(graphql`
    {
      allSanityHomePage {
        nodes {
          pageContent {
            ... on SanityPageFooter {
              _key
              _type
              footerItemInfo {
                pageLink
                pageTitle
              }
              footerShortDescription
              logo {
                asset {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const footerData = data.allSanityHomePage.nodes[0].pageContent[6]
  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div className="footerWrapper">
            <div className="col-1">
              <div className="shortdes">
                <GatsbyImage
                  image={footerData.logo.asset.gatsbyImageData}
                  alt="footer logo"
                  height="50px"
                />
                <p>{footerData.footerShortDescription}</p>
              </div>
            </div>
            <div className="col-2">
              <div>
                <ul>
                  {footerData.footerItemInfo.length &&
                    footerData.footerItemInfo
                      .slice(0, 4)
                      .map(ele => <li key={ele.pageTitle}>{ele.pageTitle}</li>)}
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  {footerData.footerItemInfo.length > 4 &&
                    footerData.footerItemInfo
                      .slice(4, 8)
                      .map(ele => <li key={ele.pageTitle}>{ele.pageTitle}</li>)}
                </ul>
              </div>
              <div className="col-4">
                <ul>
                  {footerData.footerItemInfo.length > 8 &&
                    footerData.footerItemInfo
                      .slice(8)
                      .map(ele => <li key={ele.pageTitle}>{ele.pageTitle}</li>)}
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
