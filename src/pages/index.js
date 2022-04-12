import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/homePage/heroSection/HeroSection"
import Product from "../components/product/Product"
import { Speciality } from "../components/homePage/speciality"
import { StorySection } from "../components/homePage/storySection"
import { ReviewSection } from "../components/homePage/reviewSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Speciality />
    <Product />
    <StorySection />
    <ReviewSection />
  </Layout>
)

export default IndexPage
