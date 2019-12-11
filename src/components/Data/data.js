import React, { useContext } from "react"

import { useStaticQuery, graphql } from "gatsby"

const DataContext = React.createContext()

const DataProvider = props => {
  const data = useStaticQuery(graphql`
    query {
      pageGroups: allPageGroupsYaml {
        nodes {
          order
          title
          name
          url
          pages {
            title
            url
          }
        }
      }
      externalPages: allExternalPagesYaml {
        nodes {
          categories {
            title
            name
            sites {
              title
              link
            }
          }
        }
      }
    }
  `)

  const { children } = props

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export default DataProvider

export const useData = () => useContext(DataContext)
