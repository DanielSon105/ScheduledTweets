const path    = require("path")
const webpack = require("webpack")

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    application: "./app/javascript/application.js"
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    chunkFormat: "module",
    path: path.resolve(__dirname, "app/assets/builds"),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default']
  }),
  ],
  resolve: {
    extensions: ['.css', '.js', '.jsx', '.mjs', '.scss', '.png', '.jpg', '.jpeg', '.gif', '.svg'],
    alias: {
        '$': 'jquery/src/jquery',
        'jQuery': 'jquery/src/jquery',
        'jquery': 'jquery',
    },
},
}
