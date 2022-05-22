import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import HeroSection from "../components/HeroSection"
import Section from "../components/Section"

const IndexPageEn = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Section title="About me">Text about me</Section>
    <div style={{ height: "2000px" }}></div>
  </Layout>
)

export default IndexPageEn
