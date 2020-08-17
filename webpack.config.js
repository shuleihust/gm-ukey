const path = require('path')

module.exports = {
  mode:'production',
  entry: {
    main:'./src/index.js'
  },
  output: {
    filename:'gm-ukey.js',
    path: path.resolve(__dirname, 'dist'),
	globalObject: 'this',
    libraryTarget: 'umd', // 打包的库，能够以任何形式被调用 还有其他的选项，具体看官网
    library: 'GMUkey', // 将库打包到一个全局变量上 还有其他的选项，具体看官网
  },
  externals: 'lodash' // 当自己的库有使用lodash等外部库的时候，再打包时忽略第三库的打包
}