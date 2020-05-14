import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const WhatsNew = props => {
  const { days = 3 } = props
  const { data } = useStaticQuery(
    graphql`
      query WhatsNewQuery {
        data: allFile(
          sort: { fields: fields___gitLogLatestDate, order: DESC }
          filter: {
            extension: { regex: "/mdx?/" }
            fields: { gitLogLatestDate: {} }
          }
        ) {
          files: nodes {
            file: childMdx {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
            fields {
              gitLogLatestAuthorName
              gitLogLatestDate(difference: "days")
            }
            name
          }
        }
      }
    `
  )

  const { files } = data

  const updatedFiles = files.map(({ file, fields, name }) => {
    const lastUpdated =
      fields && fields.gitLogLatestDate
        ? parseInt(fields.gitLogLatestDate, 10)
        : -1

    const isIncludeFile = file.fields.slug.includes("_includes")

    const title = file.frontmatter.title || name

    if (lastUpdated > 0 && lastUpdated < days && !isIncludeFile) {
      return (
        <li key={file.fields.slug}>
          <Link to={file.fields.slug}>{title}</Link>
          <span> - {lastUpdated} day(s)</span>
        </li>
      )
    }
    return null
  })

  return (
    <div>
      <h2>What's new?</h2>
      <ul>{updatedFiles}</ul>
    </div>
  )
}

export default WhatsNew
