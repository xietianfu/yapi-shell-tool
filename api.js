require("module-alias/register");

const { axios } = require("@/axiosConfig");
const { token } = require("@/config");

axios
  .get("api/interface/getCatMenu", {
    params: {
      project_id: "11",
    },
  })
  .then(res => {
    console.log(res.data);
  });
