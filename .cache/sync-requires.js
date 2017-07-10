// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/home/thomas/code/gatsby-test-site/.cache/dev-404-page.js")),
  "page-component---src-pages-index-js": preferDefault(require("/home/thomas/code/gatsby-test-site/src/pages/index.js")),
  "page-component---src-pages-second-gatsby-page-js": preferDefault(require("/home/thomas/code/gatsby-test-site/src/pages/second-gatsby-page.js"))
}

exports.json = {
  "dev-404-page.json": require("/home/thomas/code/gatsby-test-site/.cache/json/dev-404-page.json"),
  "index.json": require("/home/thomas/code/gatsby-test-site/.cache/json/index.json"),
  "second-gatsby-page.json": require("/home/thomas/code/gatsby-test-site/.cache/json/second-gatsby-page.json")
}

exports.layouts = {

}