import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Не найдено" />
    <h1>404: Не найдено</h1>
    <p>Вы попали туда, чего нет... Печаль.</p>
  </Layout>
)

export default NotFoundPage
