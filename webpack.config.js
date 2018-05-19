const path = require("path");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        "main": "./src/index.jsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"],
                },
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader", // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader", // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader", // compiles Sass to CSS
                  }
                ]
              },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
}
