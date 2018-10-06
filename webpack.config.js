var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/main.ts",
  mode: "development",
  output: {
    filename: "./dist/app.js",
    path: __dirname
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./src/styles.css"
    })
  ],
  module: {
    rules: [{
        test: /\.ts$/,
        exclude: ['node_modules'],
        use: [{
          loader: 'ts-loader'
        }]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }
}
