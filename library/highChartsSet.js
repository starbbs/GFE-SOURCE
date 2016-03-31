/*!
 * iScroll v4.1.9 ~ Copyright (c) 2011 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
define('highChartsSet', ['hchart'], function() {
	highChartsSet = {};
	highChartsSet.set = function(obj,options){
		if(!id)return;
		obj.highcharts({
			chart: options.chart || {
				// type: 'areaspline' // 带阴影的线
			},
			colors:options.colors || ['#3d70ee'],
			title: options.title || {
				text: ''
			},
			subtitle: options.subtitle || {
				text: ''
			},
			legend: options.legend || {
				x: options.x || 150,
				y: options.y || 100,
			},
			xAxis: options.xAxis || {
				// tickInterval: 3, // x坐标轴脚标间隔
				tickInterval: 3,
				labels: {}
			},
			yAxis: options.yAxis || {
				title: {
					text: ''
				},
				tickInterval: 3,
				labels: {}
			},
			plotOptions:options.plotOptions ||  {
				series: {
					marker: {
						enabled: false // 去掉线上的点
					}
				},
				area: {
					marker: {
						enabled: false,
						// symbol: 'circle',
						// radius: 1,
						// states: {
						// 	hover: {
						// 		enabled: false
						// 	}
						// }
					}
				}
			},
			series: options.series ||  [{
				name: '',
				data: null
			}]
		});		
	};
	return highChartsSet;
});