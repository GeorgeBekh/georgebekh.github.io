import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Body = styled.div`
  max-width: 45rem;
  margin: auto;
  background-color: white;
  padding 2rem 5rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Body>
      <Header siteTitle={"George Bekh-Ivanov"} homeLink="/en/" />
      <div>
        <main>{children}</main>
      </div>
    </Body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
