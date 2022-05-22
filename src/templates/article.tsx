import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"

function Article(data) {
  return (
    <Layout>
      <Seo title="article!" />
      {<>{JSON.stringify(data)}</>}
    </Layout>
  )
}

export default Article
