/**
 * A script to initialize the development environment specified in a .env file
 */
let fsPromises = require("fs").promises
let path = require("path")

let validateProjectStructure = require("./util/validateProjectStructure")

require("dotenv").config({
  path: `.env`,
})

const config = {
  baseuri: process.env.LOCAL_PROJECT_DIRECTORY,
}

// Validate external project structure
validateProjectStructure(config)
  .then(result => {
    const markdownLinkDir = path.join(
      path.dirname(__dirname),
      "src/external/markdown"
    )

    const { markdownDir, dataDir } = result

    // Link directories to this project
    fsPromises
      .symlink(markdownDir, markdownLinkDir, "dir")
      .then(() => {
        const dataLinkDir = path.join(
          path.dirname(__dirname),
          "src/external/data"
        )
        return fsPromises.symlink(dataDir, dataLinkDir, "dir")
      })
      .catch(error => {
        console.log(error)
      })
  })
  .catch(error => {
    console.log(error)
  })
