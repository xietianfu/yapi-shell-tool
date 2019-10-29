require("module-alias/register");

const { axios } = require("@/axiosConfig");
const { token } = require("@/config");

const api = {
  /** 获取项目基本信息 */
  projectGet: "/api/project/get",
  /** 新增接口分类 */
  addCat: "/api/interface/add_cat",
  /** 获取菜单列表 */
  getCatMenu: "/api/interface/getCatMenu",
  /** 服务端数据导入 */
  importData: "/api/open/import_data",
  /** 获取接口数据（有详细接口数据定义文档） */
  interfaceGet: "/api/interface/get",
  /** 获取某个分类下接口列表 */
  listCat: "/api/interface/list_cat",
  /** 新增接口 */
  add: "/api/interface/add",
  /** 新增或者更新接口 */
  save: "/api/interface/save",
  /** 删除接口 */
  del: "/api/interface/del",
  /** 获取接口列表数据 */
  list: "/api/interface/list",
  /** 更新接口 */
  up: "/api/interface/up",
  /** 获取接口菜单列表 */
  listMenu: "/api/interface/list_menu",
};

module.exports = {
  /** 获取项目基本信息 */
  projectGet: "/api/project/get",
  /** 新增接口分类 */
  addCat: "/api/interface/add_cat",
  /** 获取菜单列表 */
  getCatMenu: "/api/interface/getCatMenu",
  /** 服务端数据导入 */
  importData: "/api/open/import_data",
  /** 获取接口数据（有详细接口数据定义文档） */
  interfaceGet: "/api/interface/get",
  /** 获取某个分类下接口列表 */
  listCat: "/api/interface/list_cat",
  /** 新增接口 */
  add: "/api/interface/add",
  /** 新增或者更新接口 */
  save: "/api/interface/save",
  /** 删除接口 */
  del: "/api/interface/del",
  /** 获取接口列表数据 */
  list: "/api/interface/list",
  /** 更新接口 */
  up: "/api/interface/up",
  /** 获取接口菜单列表 */
  listMenu: "/api/interface/list_menu",
};

axios
  .get(api.interfaceGet, {
    params: {
      id: "11",
    },
  })
  .then(res => {
    console.log(res.data.data);
  });
