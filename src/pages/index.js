import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { HomeHeader, Baner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePage/QuickInfo'
import Galary from '../components/HomePage/Galary'
import Galary2 from '../components/HomePage/Galary2'
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
    <Galary2 />
    <Menu />
  </Layout>
)

export default IndexPage
