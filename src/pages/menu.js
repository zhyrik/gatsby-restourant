import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { PageHeader  } from '../utils'
import img from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      menu
    </PageHeader>
  </Layout>
)

export default MenuPage