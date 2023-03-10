const { defineConfig } = require("./helper/define");

module.exports = defineConfig({
  context: __dirname,
  entry: "./src/main.tsx",
  builtins: {
    html: [{ template: "./index.html" }],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'less-loader',
          },
        ],
        type: 'css',
      },
    ],
  },
  resolve:{
    alias:{
      "@":"./src"
    }
  }
});
