import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import HeroSection from "../components/HeroSection"
import Section from "../components/Section"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Section title="Обо мне">текст обо мне</Section>
    <div style={{ height: "2000px" }}></div>
  </Layout>
)

export default IndexPage
