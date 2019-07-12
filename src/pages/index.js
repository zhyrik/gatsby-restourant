import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { HomeHeader, Baner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePage/QuickInfo'

const IndexPage = () => (
  <Layout>
    <SEO title="Reataurant" />
    <HomeHeader img={img} >
      <Baner title="zhyrik" subtitle="some subtitle">
        <BannerButton style={{margin: '2rem auto'}}>menu</BannerButton>
      </Baner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
