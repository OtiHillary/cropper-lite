const path = require('path')

module.exports = {
   mode: "development",
   entry: path.resolve(__dirname, "src/index.js"),
   output: {
      path: path.resolve(__dirname, "public"),
      filename: "main.js"
   },
   target: "web",
   devServer: {
      port: "3000",
      static: ["./public"],
      open: true,
      hot: true,
      liveReload: true
   },
   resolve: {
      extensions: [".js", ".jsx"]
   },
   module: {
      // rules: [
      //    {
      //       test: /\.(.js|.jsx)$/,
      //       exclude: /node_modules/,
      //       use: "babel-loader"
      //    }
      // ]
      rules: [
         {
           test: /\.(?:js|mjs|cjs|css)$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
             options: {
               presets: [
                 ['@babel/preset-env', { targets: "defaults" }]
               ]
             }
           }
         }
       ]
   }
}