module.exports = {
  lintOnSave: false,
  publicPath: "./",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 37.5,
            // selectorBlackList: ["van"], 
            propList: ["*"],
          }),
        ],
      },
    },
  },
  // chainWebpack: (config) => {
  //   if (process.env.NODE_ENV === "production") {
  //     config.plugin("html").tap((args) => {
  //       args[0].minify.removeAttributeQuotes = false;
  //       return args;
  //     });
  //   }

  //   config.plugin("define").tap((args) => {
  //     // args[0]['process.env'].BASE_URL ='"./"';
  //     args[0]["process.env"].URL_ARG = '"[[${api_root_url}]]"';
  //     return args;
  //   });
  // },
};
