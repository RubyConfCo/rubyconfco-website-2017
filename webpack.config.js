const { resolve, join } = require('path')
const webpack = require('webpack')

const DashboardPlugin = require('webpack-dashboard/plugin')
const autoprefixer = require('autoprefixer')

const nodeEnv = process.env.NODE_ENV || 'development'
const hotEnv = process.env.HOT_ENV || 'true'
const isHot = hotEnv === 'true'
const isProduction = nodeEnv === 'production'

const clientPath = join(__dirname, './src')
const publicPath = join(__dirname, './public')

// Common plugins
const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: '[name].bundle.js'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 10'
          ]
        })
      ],
      context: clientPath
    }
  })
]

// Common plugins
const rules = [
  {
    enforce: 'pre',
    test: /\.(js|jsx)$/,
    loader: 'eslint-loader',
    exclude: /node_modules/
  },
  {
    test: /\.html$/,
    exclude: /node_modules/,
    use: {
      loader: 'file-loader',
      query: {
        name: '[name].[ext]'
      }
    }
  },
  {
    test: /\.(js|jsx)$/,
    use: [
      {
        loader: 'babel-loader'
      }
    ],
    exclude: /node_modules/
  },
  {
    test: /\.(scss|sass|css)$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'resolve-url-loader'
      },
      {
        loader: 'sass-loader'
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [resolve(__dirname, 'src/styles/_icomoon.sass'), resolve(__dirname, 'src/styles/globals.sass')]
        }
      }
    ],
    include: __dirname
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
      loader: 'image-webpack-loader',
      query: {
        mozjpeg: {
          progressive: true
        },
        gifsicle: {
          interlaced: false
        },
        optipng: {
          optimizationLevel: 4
        },
        pngquant: {
          quality: '75-90',
          speed: 3
        }
      }
    }],
    exclude: /node_modules/,
    include: __dirname
  },
  {
    test: /\.svg$/,
    loader: 'svg-inline-loader'
  },
  {
    test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    query: {
      limit: 8192,
      name: 'fonts/[name].[ext]?[hash]'
    }
  }
]
// Common entry
const entry = {
  js: [],
  vendor: [
    'babel-polyfill',
    'immutable',
    'isomorphic-fetch',
    'jquery',
    'lodash',
    'moment',
    'react',
    'react-addons-transition-group',
    'react-dom',
    'react-dropzone',
    'react-modal',
    'react-redux',
    'react-router',
    'react-router-dom',
    'react-router-redux',
    'react-select',
    'react-slick',
    'recharts',
    'redux',
    'redux-form',
    'redux-storage',
    'redux-storage-decorator-filter',
    'redux-storage-engine-localstorage',
    'redux-thunk',
    'scroll-to',
    'scrollreveal'
  ]
}


if (isProduction) {
  // Production plugins
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    })
  )
  entry.js.push(
    './index.jsx')
} else {
  if (isHot) {
    // Development plugins
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new DashboardPlugin()
    )
    entry.js.push(
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server')
  }
  entry.js.push(
    './index.jsx')
}

module.exports = {
  devtool: isProduction ? 'nosources-source-map' : 'eval',
  context: clientPath,
  entry,
  output: {
    filename: '[name].bundle.js',
    path: publicPath,
    publicPath: '/'
  },
  devServer: {
    contentBase: isProduction ? './public' : './dist',
    compress: isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    historyApiFallback: true,
    inline: !isProduction,
    publicPath: '/',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m'
      }
    }
  },
  module: {
    rules
  },
  // externals: {
  //   'personality-text-summary': 'Pts'
  // },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      resolve(__dirname, 'node_modules'),
      clientPath
    ]
  },
  plugins
}
