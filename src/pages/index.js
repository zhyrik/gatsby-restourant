import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { HomeHeader, Baner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Reataurant" />
    <HomeHeader img={img} >
      <Baner title="zhyrik" subtitle="some subtitle">
        <BannerButton>menu</BannerButton>
      </Baner>
    </HomeHeader>
  </Layout>
)

export default IndexPage
