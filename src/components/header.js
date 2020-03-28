import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`

const Avatar = styled(Img)`
  object-fit: cover;
  & img {
    object-position: 0 7% !important;
  }
  border-radius: 100px;

  width: 100px;
  height: 100px;

  flex-shrink: 0;
  margin-right: 2rem;
`

const Name = styled.span`
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 2.2rem;
  font-family: sans-serif;
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header>
      <Container>
        <Avatar fluid={data.placeholderImage.childImageSharp.fluid} />
        <Name>{siteTitle}</Name>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
