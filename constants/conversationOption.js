const utils = require("@/utils");

const { getKeyNameArr, getNames } = utils;

/** 顶层选择项 */
const choices = {
  down: {
    name: "下载\\更新接口",
    children: {
      downNew: {
        name: "下载未更新的接口",
      },
      downDir: {
        name: "下载更新目录下的接口",
      },
      downAll: {
        name: "下载更新所有接口",
      },
    },
  },
  search: {
    name: "查询接口",
    children: {
      dir: {
        name: "更具目录查找接口",
      },
      regex: {
        name: "正则查找",
      },
    },
  },
  manage: {
    name: "接口管理",
    children: {
      finish: {
        name: "将接口状态修改为完成",
      },
    },
  },
  addEdit: {
    name: "增加/修改接口",
    children: {
      json: {
        name: "根据json文件",
      },
      md: {
        name: "根据markdown",
      },
      js: {
        name: "根据js文件",
      },
    },
  },
  delet: {
    name: "删除接口",
    children: {
      file: {
        name: "删除指定接口",
        children: {
          local: {
            name: "仅删除本地接口",
          },
          cloud: {
            name: "同时删除远端接口",
          },
        },
      },
      dir: {
        name: "删除指定接口目录",
        children: {
          local: {
            name: "仅删除本地接口",
          },
          cloud: {
            name: "同时删除远端接口",
          },
        },
      },
      all: {
        name: "删除所有接口",
        children: {
          local: {
            name: "仅删除本地接口",
          },
          cloud: {
            name: "同时删除远端接口",
          },
        },
      },
    },
  },
};

exports.choices = choices;

exports.topOption = {
  type: "list",
  message: "选择需要进行的操作",
  name: "option",
  choices: getNames(choices),
};

exports.downOption = {
  type: "list",
  message: "选择接口下载类型",
  name: "down",
  choices: getNames(choices.down.children),
};
