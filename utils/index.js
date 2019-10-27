/**
 * 将对象的属性和名字构建出value-name数组
 * @param {object}} obj 待处理的对象
 * @author xietf
 * @returns [{key:'string',name:'string'}...]
 */
exports.getKeyNameArr = function(obj) {
  return Object.entries(obj).map(item => ({
    value: item[0],
    name: item[1].name,
  }));
};

/**
 * 将对象的属性和名字构建出name数组
 * @param {object}} obj 待处理的对象
 * @author xietf
 * @returns [name...]
 */
exports.getNames = function(obj) {
  return Object.entries(obj).map(item => item[1].name);
};
