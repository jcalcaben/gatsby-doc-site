import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Callout from "../Callout"
import { DataProvider } from "../Data"
import Footer from "../Footer"
import GlobalSpectrumProvider from "../GlobalSpectrumProvider"
import Header from "../Header"

import defaultStyles from "./app.module.css"

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

  return (
    <DataProvider>
      <GlobalSpectrumProvider size="medium" theme="light">
        <div className={defaultStyles.root}>
          <Header siteTitle={siteTitle} slug={slug} />
          <div className={defaultStyles.content}>
            <section>Left sidebar</section>
            <main>
              {children}
              <div>
                <Callout
                  type={"tip"}
                  header={"Good job!"}
                  content={"We made a tip callout!"}
                />
                <Callout
                  type={"info"}
                  header={"Woah!"}
                  content={"We made an info callout!"}
                />
                <Callout
                  type={"warning"}
                  header={"Dang!"}
                  content={"We made a warning callout!"}
                />
                <Callout
                  type={"error"}
                  header={"Oops!"}
                  content={"We made an error callout!"}
                />
              </div>
            </main>
            <section>Right sidebar</section>
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
