const path = require('path');

module.exports = {
  entry: './src/RLX.js',
  mode:'development',
  output: {
    globalObject:'this',
    library: 'RLX',
    libraryTarget: 'window',  
    path: path.resolve(__dirname, 'dist'),
    filename: 'rlx.js',
  },
  
};