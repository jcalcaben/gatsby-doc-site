import { useStaticQuery, graphql } from "gatsby"

const useSiteTitle = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data
}

export default useSiteTitle
