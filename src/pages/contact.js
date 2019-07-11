import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { PageHeader  } from '../utils'
import img from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      contack
    </PageHeader>
  </Layout>
)

export default ContactPage