// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "page-component---cache-dev-404-page-js": require("gatsby-module-loader?name=page-component---cache-dev-404-page-js!/home/thomas/code/gatsby-test-site/.cache/dev-404-page.js"),
  "page-component---src-pages-index-js": require("gatsby-module-loader?name=page-component---src-pages-index-js!/home/thomas/code/gatsby-test-site/src/pages/index.js"),
  "page-component---src-pages-second-gatsby-page-js": require("gatsby-module-loader?name=page-component---src-pages-second-gatsby-page-js!/home/thomas/code/gatsby-test-site/src/pages/second-gatsby-page.js"),
  "page-component---src-pages-counter-js": require("gatsby-module-loader?name=page-component---src-pages-counter-js!/home/thomas/code/gatsby-test-site/src/pages/counter.js")
}

exports.json = {
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/thomas/code/gatsby-test-site/.cache/json/dev-404-page.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/thomas/code/gatsby-test-site/.cache/json/index.json"),
  "second-gatsby-page.json": require("gatsby-module-loader?name=path---second-gatsby-page!/home/thomas/code/gatsby-test-site/.cache/json/second-gatsby-page.json"),
  "counter.json": require("gatsby-module-loader?name=path---counter!/home/thomas/code/gatsby-test-site/.cache/json/counter.json")
}

exports.layouts = {

}