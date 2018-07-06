import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Layout from 'layouts'

const Sponsor = ({ id, companyName, companyLogoDark }) => {
  return (
    <Link to={`/sponsor/${id}`}>
      {companyLogoDark ? <Img {...companyLogoDark} /> : <h3>{companyName}</h3>}
    </Link>
  )
}

const Sponsors = ({ data }) => {
  const sponsors = data.allContentfulSponsors.edges

  if (sponsors.length <= 0) {
    return <div>No Sponsors</div>
  }

  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {sponsors.map(({ node }) => <Sponsor key={node.id} {...node} />)}
      </div>
    </Layout>
  )
}

export default Sponsors

Sponsors.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query sponsorsQuery {
    allContentfulSponsors(limit: 1000) {
      edges {
        node {
          id
          companyName
          companyLogoDark {
            resolutions(width: 200) {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`
