//设置 路径的快捷方式
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assetc': "@/assetc",
        'components': "@/components",
        'network': "@/network",
        'views': "@/views",
      }
    }
  }
}
