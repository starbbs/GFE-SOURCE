/*!
 * iScroll v4.1.9 ~ Copyright (c) 2011 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
define('highChartsSet', ['hchart'], function() {
	highChartsSet = {};
	highChartsSet.set = function(obj,options){
		if(!id)return;
		obj.highcharts({
			chart: {
				// type: 'areaspline' // 带阴影的线
			},
			colors:options.colors || ['#3d70ee'],
			title: {
				text: options.text || ''
			},
			subtitle: {
				text: options.text || ''
			},
			legend: {
				x: options.x || 150,
				y: options.y || 100,
			},
			xAxis: {
				// tickInterval: 3, // x坐标轴脚标间隔
				tickInterval: (function() {
					return chartData.length - 1;
				})(),
				labels: {
					formatter: function() {
						return chartDate[this.value];
					}
				}
			},
			yAxis: {
				title: {
					text: ''
				},
				tickInterval: (function() {
					return avalon.filters.fix(Math.round(Math.max.apply(Math, chartData) * 1.1) / 4);
				})(),
				labels: {
					formatter: function() {
						return this.value.toFixed(2);
					}
				}
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
			series:options.series ||  [{
				name: '历史价格',
				data: chartData
			}]
		});		
	};
	return highChartsSet;
});