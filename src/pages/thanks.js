import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiCheckboxCircleLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <RiCheckboxCircleLine style={{
        fontSize: "128px",
        color: "var(--primary-color)"
      }}/>
      <h1>Got your message</h1>
      <p>Thank you for sharing. We received your submission and will post it within the next few days.</p>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Home</Link>
    </div>

  </Layout>
)

export default Thanks