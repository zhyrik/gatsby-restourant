import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { PageHeader, Baner  } from '../utils'
import img from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      <Baner title="menu" subtitle="some subtitle" />
    </PageHeader>
  </Layout>
)

export default MenuPage