import $ from 'jquery';
import _ from 'lodash';
import moment from 'moment';
import chrome from 'ui/chrome';
import uiModules from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import './less/main.less';
import template from './templates/index.html';

uiRoutes.enable();
uiRoutes
.when('/', {
  template,
});

uiModules
.get('app/skiminock_chart_plugin', [])
.controller('SkiminockChartPluginController', function ($scope, $route, $interval, $window) {
  $scope.visibleFrame = 1;

  window.onmessage = toggleChart;

  function toggleChart(e) {
    const needToggle = _.get(e, 'data.eventName') === 'kibana-chart-click';
    if (needToggle) {
      if ($scope.visibleFrame === 3) {
        $scope.visibleFrame = 1;
      } else {
        $scope.visibleFrame++;
      }
      $scope.$apply();
    }
  }
});
