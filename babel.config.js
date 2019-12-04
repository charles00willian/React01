module.exports = {
  // which babel presets are we using
  presets: [
    "@babel/preset-env", // js things that the browser doesn't understand
    "@babel/preset-react" // react things th browser doens't understand
  ],
  plugins:[
    '@babel/plugin-proposal-class-properties'
  ]
}