require("module-alias/register");

const axios = require("axios");
const { url, token } = require("@/config");

axios.defaults.baseURL = url;
axios.interceptors.request.use(
  config => {
    config.params = {
      token,
      ...config.params,
    };
    return config;
  },
  err => Promise.reject(err)
);

module.exports = {
  axios,
};
