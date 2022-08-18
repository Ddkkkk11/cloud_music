/* const path=require('path');
const lessPath=path.resolve(__dirname+"/src/styles/cover.less") */

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
          modifyVars: {
            // 直接覆盖变量
            // 'cell-font-size': '17px',
            hack: `true; @import "/src/styles/cover.less";`,
          },
      },
    },
  },
}