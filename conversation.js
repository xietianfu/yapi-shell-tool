/**
 * cli会话逻辑
 * TODO:
 * - [x]功能整理
 * - 功能行文
 * - 菜单文案
 * - 用户提示
 * - 错误提示
 */

const inquirer = require("inquirer");

const topOption = {
  type: "list",
  message: "选择需要进行的操作",
  choices: [
    {
      name: "下载\\更新接口",
      key: "down",
    },
    {
      name: "查询接口",
      key: "search",
    },
    {
      name: "接口管理",
      key: "manage",
    },
    {
      name: "增加接口",
      key: "add",
    },
    {
      name: "修改接口",
      key: "edit",
    },
    {
      name: "删除接口",
      key: "delet",
    },
  ],
};

inquirer.prompt(topOption).then(answers => {
  console.log(answers);
});
