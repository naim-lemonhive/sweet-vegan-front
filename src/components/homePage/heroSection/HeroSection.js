import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BoxHeroSection from "../heroSectionBox"
import {
  heroSection,
  heroTitle,
  heroDescription,
  heroButton,
  heroItemContainer,
} from "./HeroSection.module.css"
const HeroSection = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityHomePage {
        nodes {
          pageContent {
            ... on SanityPageHeroSection {
              heroSectionBackground
              heroShortDescription
              heroTitle
              headingText {
                textColor
                textSize
              }
              heroButtonText {
                buttonBackgroundColor
                buttonLink
                buttonText
                buttonTextColor
              }
              heroDescriptionTextSize {
                textColor
                textSize
              }
            }
          }
        }
      }
    }
  `)

  const heroData = data.allSanityHomePage.nodes[0].pageContent[1]
  return (
    <div className={heroSection}>
      <div className="container">
        <div className={heroItemContainer}>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "600px",
              }}
            >
              <h1 className={heroTitle}>{heroData.heroTitle}</h1>
              <h5 className={heroDescription}>
                {heroData.heroShortDescription}
              </h5>
              <button className={heroButton}>
                {heroData.heroButtonText.buttonText.toUpperCase()}
              </button>
            </div>
          </div>
          <div
            style={{
              height: "600px",
              paddingLeft: "35px",
              position: "relative",
            }}
          >
            {/* <img
              src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
              alt="car"
            /> */}
            <div
              style={{
                filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.3))",
                position: "absolute",
                top: "230px",
                left: "350px",
              }}
            >
              <BoxHeroSection size={{ width: "240px", height: "322px" }} />
            </div>
            <div
              style={{
                zIndex: 3,
                filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.3))",
                position: "absolute",
                top: "250px",
                left: 50,
              }}
            >
              <BoxHeroSection size={{ width: "208px", height: "278px" }} />
            </div>
            <div
              style={{
                filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.3))",
                position: "absolute",
                top: "130px",
                left: "150px",
              }}
            >
              <BoxHeroSection size={{ width: "280px", height: "375px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
