const path = require("path")

const projectRootDir = path.dirname(__dirname)

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${projectRootDir}/src/external`,
      },
    },
  ],
}
