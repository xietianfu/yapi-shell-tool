require("module-alias/register");
const inquirer = require("inquirer");
const { topOption, choices } = require("@/constants/conversationOption");
const utils = require("@/utils");

const { getKeyNameArr, getNames } = utils;

/**
 * cli会话逻辑
 * TODO:
 * - [x]功能整理
 * - [x]功能行文
 * - 菜单文案
 * - 用户提示
 * - 错误提示
 */

/**
 * 下载对话函数
 */
function downPrompt() {
  inquirer
    .prompt({
      type: "list",
      message: "选择接口下载类型",
      name: "down",
      choices: getNames(choices.down.children),
    })
    .then(value => {
      console.log(value);
    });
}

function searchPrompt() {
  inquirer
    .prompt({
      type: "list",
      name: "search",
      message: "选择需要查询的接口",
      choices: getNames(choices.search.children),
    })
    .then(value => {
      console.log(value);
    });
}

function managePrompt() {
  inquirer
    .prompt({
      type: "list",
      name: "manage",
      message: "选择接口管理操作",
      choices: getNames(choices.manage.children),
    })
    .then(value => {
      console.log(value);
    });
}

inquirer
  .prompt({
    type: "list",
    message: "选择需要进行的操作",
    name: "option",
    choices: getNames(choices),
  })
  .then(value => {
    switch (value.option) {
      case choices.down.name:
        downPrompt();
        break;
      case choices.search.name:
        searchPrompt();
        break;
      case choices.manage.name:
        managePrompt();
        break;
    }
  });
