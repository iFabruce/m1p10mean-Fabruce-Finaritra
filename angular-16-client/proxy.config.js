const PROXY_CONFIG = [
    {
      context: [
        "/api"
      ],
      target: "*",
      secure: false,
      logLevel: "debug",
      changeOrigin: true
    }
  ];
  
  module.exports = PROXY_CONFIG;