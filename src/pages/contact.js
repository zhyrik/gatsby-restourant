import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { PageHeader, Buner, Baner  } from '../utils'
import img from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      <Baner title="contact us" subtitle="some subtitle" />
    </PageHeader>
  </Layout>
)

export default ContactPage