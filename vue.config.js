module.exports = {
    devServer: {
        // 设置代理
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'http://rec-mp-api.tskedu.com/api',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}
