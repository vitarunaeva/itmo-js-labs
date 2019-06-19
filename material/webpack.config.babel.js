const WDS_PORT = 1234;

module.exports = {
  mode: 'development',
  devtool: 'sourcemap',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      query: {
        babelrc: false,
        presets: [
          'react', ['env', {
            modules: false,
          }],
        ],
      },
    }],
  },
  devServer: {
    port: WDS_PORT,
    host: '0.0.0.0',
  },
};
