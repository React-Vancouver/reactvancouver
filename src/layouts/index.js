import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Nav, Footer } from 'components'
import styled from 'react-emotion'

// Global Styles
import './index.css'
import 'styles/Global'

const navHeight = '4rem'

const Main = styled.main({
  minHeight: `calc(100vh -${navHeight})`,
  marginTop: `-${navHeight}`,
})

const Layout = ({ children, title, theme }) => (
  <React.Fragment>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Nav siteTitle={title} height={navHeight} theme={theme} />
    <Main>{children}</Main>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  title: PropTypes.string,
}

export default Layout
