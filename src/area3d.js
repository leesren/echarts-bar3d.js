import echarts from 'echarts/lib/echarts';
import visualSymbol from 'echarts/lib/visual/symbol';
import layoutPoints from 'echarts/lib/layout/points';

var zrUtil = echarts.util;

import './area3d/Area3dSeries';

import './area3d/Area3dView';

// In case developer forget to include grid component
echarts.registerVisual(
  zrUtil.curry(visualSymbol, 'area3d', 'circle', 'area3d')
);
echarts.registerLayout(zrUtil.curry(layoutPoints, 'area3d')); // Down sample after filter
