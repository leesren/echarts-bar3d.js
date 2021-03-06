import makeStyleMapper from 'echarts/lib/model/mixin/makeStyleMapper';
var getArea3dStyle = makeStyleMapper([
  ['fill', 'color'],
  ['stroke', 'borderColor'],
  ['shadowBlur'],
  ['shadowOffsetX'],
  ['shadowOffsetY'],
  ['opacity'],
  ['shadowColor']
]);
var _default = {
  getArea3dStyle: function(excludes, includes) {
    return getArea3dStyle(this, excludes, includes);
  }
};
export default _default;
