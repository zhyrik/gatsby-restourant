import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { HomeHeader, Baner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePage/QuickInfo'
import Galary from '../components/HomePage/Galary'
import Menu from '../components/HomePage/Menu'

const IndexPage = () => (
  <Layout>
    <SEO title="Reataurant" />
    <HomeHeader img={img} >
      <Baner title="zhyrik" subtitle="some subtitle">
        <BannerButton style={{margin: '2rem auto'}}>menu</BannerButton>
      </Baner>
    </HomeHeader>
    <QuickInfo />
    <Galary />
    <Menu />
  </Layout>
)

export default IndexPage
