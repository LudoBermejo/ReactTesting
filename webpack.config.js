const webpack = require('webpack');
const path = require('path');

console.log(path.resolve(__dirname, './node_modules/foundation-sites/scss'));

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: ['./bower_components', 'node_modules'],
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      CountdownControls: 'app/components/CountdownControls.jsx',
      TimerControls: 'app/components/TimerControls.jsx',
      AppStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-3']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        loaders: ['style- loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  sassLoader: { // It's not working at all :(
    includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/scss')]
  },
  devtool: 'cheap-module-eval-source-map'
};
