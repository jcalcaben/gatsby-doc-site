/**
 * A script to initialize the development environment specified in a .env file
 */
let fs = require("fs")
let path = require("path")

require("dotenv").config({
  path: `.env`,
})

//console.log(process.env.LOCAL_PROJECT_DIRECTORY)

let markdownDir = path.join(
  process.env.LOCAL_PROJECT_DIRECTORY,
  "src/markdown"
)
let markdownLinkDir = path.join(
  path.dirname(__dirname),
  "src/external/markdown"
)

let dataDir = path.join(
  process.env.LOCAL_PROJECT_DIRECTORY,
  "src/data"
)
let dataLinkDir = path.join(path.dirname(__dirname), "src/external/data")

//console.log(markdownLinkDir)
//console.log(markdownDir)

// Create directory and create symbolic link
fs.mkdir(path.dirname(markdownLinkDir),{recursive:true},err=>{
    if(err) throw err;

    fs.symlinkSync(markdownDir, markdownLinkDir, 'dir');
    fs.symlinkSync(dataDir, dataLinkDir, 'dir');
})
