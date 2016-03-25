// 张树垚 2015-08-24 16:56:17 创建
// 检测模块


define('mydate', function() {

	var mydate = {};

	$.extend(mydate, {
		add22: function(number) {
			number = parseInt(number);
			if (isNaN(number)) {
				return '00';
			}
			return 0 <= number && number <= 10 ? '0' + number : '' + number;
		},
		parseDate: function(time) { // 把字符串时间转为对应Date实例
			// 2016-01-14 02:33:44
			var match = time.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2})\:(\d{2})\:(\d{2})/);
			return 'setFullYear,setMonth,setDate,setHours,setMinutes,setSeconds'.split(',').reduce(function(date, item, index) {
				if (item === 'setMonth') {
					match[index + 1] -= 1;
				}
				date[item](parseInt(match[index + 1]));
				return date;
			}, new Date());
			// return new Date(time);
		},
		timeHandler: function(time) { // 时间处理
			// 输入: "2016-01-08 05:30:16"
			// if (typeof time === 'string') {
			// 	var match = time.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2})\:(\d{2})\:(\d{2})/);
			// 	return 'year,month,day,hour,minute,second'.split(',').reduce(function(result, item, index) {
			// 		result[item] = parseInt(match[index + 1]);
			// 		return result;
			// 	}, {});
			// }
			if (time.constructor === Date) {
				return 'year:getFullYear,month:getMonth,date:getDate,day:getDay,hour:getHours,minute:getMinutes,second:getSeconds'.split(',').reduce(function(result, item) {
					item = item.split(':'); //[year,getFullYear]
					item[1] = time[item[1]](); //getFullYear = time[getFullYear]()
					result[item[0]] = item[1]; //result.year = '2016'
					switch (item[0]) { // 个别特殊处理
						case 'month':
							result.month2 = item[1] + 1; // 月份(阿拉伯数字)
							result.month3 = item[1] >= 10 ? item[1] === 10 ? '十一' : '十二' : '一二三四五六七八九十' [item[1]]; // 月份(中文数字)															'一二三四五六七八九十'[2]	
							break;
						case 'day':
							result.day2 = '日一二三四五六' [item[1]]; // 周(中文数字)
							break;
						case 'hour':
							result.hour2 = item[1] < 10 ? ('0' + item[1]) : ('' + item[1]);
							break;
						case 'minute':
							result.minute2 = item[1] < 10 ? ('0' + item[1]) : ('' + item[1]);
							break;
					}
					return result;
				}, {});
			}
		},
		timeClearHour: function(time) { // 干掉小时, 分钟, 秒, 毫秒
			if (time.constructor === Date) {
				var tmp = new Date(time.getTime());
				tmp.setHours(0);
				tmp.setMinutes(0);
				tmp.setSeconds(0);
				tmp.setMilliseconds(0);
				return tmp;
			}
		},
		timeDayDiffer: function(timeA, timeB) { // 两个时间的日期差
			if (timeA.constructor === Date && timeB.constructor === Date) {
				return Math.round((this.timeClearHour(timeA).getTime() - this.timeClearHour(timeB).getTime()) / 1000 / 60 / 60 / 24);
			}
		},
		timeCompare: function(timeA, timeB) { // 已A为准, 返回B是A的今天, 昨天, 前天
			if (timeA.constructor === Date && timeB.constructor === Date) {
				if (timeA.getTime() >= timeB.getTime()) {
					if (this.timeDayDiffer(timeA, timeB) > 2) { //if(this.timeDayDiffer(timeA, timeB) > 2){
						return false;
					} else {
						//3-16前代码
						return ['今天', '昨日', '前天'][this.timeDayDiffer(timeA, timeB)];
						//return ['昨日', '前天'][this.timeDayDiffer(timeA, timeB)];
					}
				}
			}
		},
		date2String: function(date) { // 日期转成字符串(2016-3-10)
			return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
		},
		date2String2: function(date) { // 日期转成字符串2(14:25:55)
			return mydate.add22(date.getHours()) + ':' + mydate.add22(date.getMinutes()) + ':' + mydate.add22(date.getSeconds());
		},
		date2String3: function(date) {
			return mydate.date2String(date) + ' ' + mydate.date2String2(date);
		},
		getCurHourMinu: function(date) {
			return date.getHours() + ':' + date.getMinutes();
		},
	});

	return mydate;
});