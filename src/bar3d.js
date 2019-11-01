// 注意：UE中使用多个版本导致echarts依赖有问题
import echarts from 'echarts/lib/echarts';
import barLayoutGrid from 'echarts/lib/layout/barGrid';
import './bar3d/Bar3dSeries';
import './bar3d/Bar3dView';

echarts.registerLayout(echarts.util.curry(barLayoutGrid, 'bar3d'));

echarts.registerVisual(function(ecModel) {
  ecModel.eachSeriesByType('bar3d', function(seriesModel) {
    var data = seriesModel.getData();
    data.setVisual('legendSymbol', 'roundRect');
  });
});
