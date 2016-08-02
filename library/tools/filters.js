// 张树垚 2015-10-29 16:02:38 创建
// 过滤器


define('filters', function() {
	// filters 里面所有方法返回的所有都是string类型
	var filters = avalon.filters;
	//修正乘法的精度问题
	var accMul = function(arg1, arg2){
	    	var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try { m += s1.split(".")[1].length } catch (e) { }
        try { m += s2.split(".")[1].length } catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }
	var fix = function(name, str, length) { // 保留小数位
		str = isNaN(parseFloat(str)) ? 0 : parseFloat(str);
		length = isNaN(parseInt(length)) ? 2 : parseInt(length);
		var pow = Math.pow(10, length);
		//修正小数乘一个整数出小数的情况,乘完之后再进行四舍五入取0位小数
		return ((Math[name](accMul(str , pow))) / pow).toFixed(length);
	};

	return $.extend(filters, {
		// 金额展示
		// 示例: {{item.moneyChange|sign}} {{item.moneyChange|abs|currency(' ')}} G
		sign: function(str) { // 判断正负
			str = isNaN(parseFloat(str)) ? 0 : parseFloat(str);
			//3-16前写法 return str != 0 ? str > 0 ? '+' : '-' : '';
			return str >= 0 ? '+' : '-';
		},
		sign2: function(str) { // 判断正负2
			str = isNaN(parseFloat(str)) ? 0 : parseFloat(str);
			return str != 0 ? str > 0 ? '↑' : '↓' : '';
		},
		abs: function(str) { // 绝对值
			str = isNaN(parseFloat(str)) ? 0 : parseFloat(str);
			return Math.abs(str);
		},
		fix: function(str, length) { // 四舍五入后保留多少位小数
			return fix('round', str, length);
		},
		floorFix: function(str, length) { // 去尾后保留多少位小数
			return fix('floor', str, length);
		},
		ceilFix: function(str, length, isGop) { // 向上进一后保留多少位小数 最后一个参数默认就是两位，true为果仁数设置为三位
			if (str === 0 || (str + '').indexOf('.') < 0) {
				return (isGop === undefined? (str + '.00') : (str + '.000'));
			}
			return ((str + '').split('.')[1].length && (str + '').split('.')[1].length === 2) ? parseFloat(str) : fix('ceil', parseFloat(str), length);
		},
		tail: function(str, length) { // 尾数
			str = typeof str !== 'string' ? '' : parseFloat(str);
			length = isNaN(parseInt(length)) ? 4 : Math.abs(parseInt(length));
			return str.substr(-length);
		},
		omit: function(str, length, replace) { // 省略
			var l = 5; // 默认保留长度
			length = isNaN(parseInt(length)) ? l : parseInt(length); //没传length isNaN()返回true
			return str.length > length ? (str.substring(0, length) + (replace || '...')) : str;
		},
		address: function(str, length) { // 地址省略
			return filters.omit(str, 8, '**********');
		},
		phone: function(str) { // 手机省略
			var phoneReg = /^((13[0-9])|(14[57])|(15[0-35-9])|(17[0678])|(18[0-9]))\d{8}$/;
			return phoneReg.test(str) ? String(str).substr(0, 3) + '****' + String(str).substr(-4) : str;
		},
	});
});