import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { PageHeader  } from '../utils'
import img from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      about
    </PageHeader>
  </Layout>
)

export default AboutPage