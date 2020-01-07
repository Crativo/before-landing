/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allCaseStudiesJson(limit: 1000) {
          nodes {
            id
            brandName
            workType
            rows {
              cols {
                imageSrc
              }
            }
            parent {
              ... on File {
                id
                name
                relativePath
              }
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each file.
  const CaseStudyTemplate = path.resolve(`src/templates/CaseStudy.tsx`)

  result.data.allCaseStudiesJson.nodes.forEach((node) => {
    const path = `/work/${node.parent.name}`
    createPage({
      path,
      component: CaseStudyTemplate,
      context: {
        path,
        node,
      },
    })
  })
}
