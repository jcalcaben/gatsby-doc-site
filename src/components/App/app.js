import React, { useCallback, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { DataProvider } from "../Data"
import Footer from "../Footer"
import GlobalSpectrumProvider from "../GlobalSpectrumProvider"
import Header from "../Header"
import Panel from "../Panel"

import defaultStyles from "./app.module.css"
import TreeNavigation from "../TreeNavigation"

const App = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title, slug, children } = props

  const siteTitle = title || data.site.siteMetadata.title

  const [navOpen, setNavOpen] = useState(true)
  const handleNavToggleClick = useCallback(() => {
    setNavOpen(!navOpen)
  }, [navOpen])

  return (
    <DataProvider>
      <GlobalSpectrumProvider size="medium" theme="light">
        <div className={defaultStyles.root}>
          <Header
            siteTitle={siteTitle}
            slug={slug}
            onNavToggleClick={handleNavToggleClick}
          />
          <div className={defaultStyles.content}>
            <Panel open={navOpen}>
              <TreeNavigation slug={slug} />
            </Panel>
            <main>{children}</main>
            <Panel>{"Right sidebar"}</Panel>
          </div>
          <Footer />
        </div>
      </GlobalSpectrumProvider>
    </DataProvider>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default App
