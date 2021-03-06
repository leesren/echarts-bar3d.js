var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    'echarts-bar3d': __dirname + '/index.js'
  },
  // plugins: [
  //     new webpack.DefinePlugin({
  //         'typeof __DEV__': JSON.stringify('boolean'),
  //         __DEV__: false
  //     })
  // ],
  devtool: false,
  output: {
    libraryTarget: 'umd',
    library: 'echarts-bar3d',
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  externals: {
    'echarts/lib/echarts': 'echarts'
  },
  resolve: {
    alias: {
      'echarts/lib/echarts': 'echarts'
    }
  }
};
