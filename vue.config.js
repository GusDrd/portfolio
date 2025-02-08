module.exports = {
  configureWebpack: {
    plugins: [
      new (require('webpack')).DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false', // or 'true' depending on your needs
      }),
    ],
  },
};