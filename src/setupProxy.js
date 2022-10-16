const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("star", {
      // target: "http://star-think.ddns.net:1722",
      target: "http://122.39.136.92:1722",
      pathRewrite: {
        "^/star": "",
      },
      changeOrigin: true,
    })
  );
};
