import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/homePage/heroSection/HeroSection"
import Product from "../components/product/Product"
import { Speciality } from "../components/homePage/speciality"
import { StorySection } from "../components/homePage/storySection"
import { ReviewSection } from "../components/homePage/reviewSection"
import { NewsLetter } from "../components/newsLetter"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Speciality />
    <Product />
    <StorySection />
    <ReviewSection />
    <NewsLetter />
  </Layout>
)

export default IndexPage
