import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { PageHeader, Baner  } from '../utils'
import img from '../images/bcg/aboutBcg.jpeg'
import Galary2 from '../components/HomePage/Galary2'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      <Baner title="about" subtitle="some subtitle"></Baner>
    </PageHeader>
    <Galary2 />
  </Layout>
)

export default AboutPage