// 张树垚 2016-04-06 16:00:05 创建
// check公用


define('check-common', function() {

	String.prototype.reverse = String.prototype.reverse || function() {
		return this.split('').reverse().join('');
	};
	String.prototype.join = String.prototype.join || function(arg) {
		return Array.prototype.join.call(this, arg);
	};

	var charactersRegs = [ // 字符所有种类
		/[A-Z]/, // 大写字符
		/[a-z]/, // 小写字符
		/[\d]/, // 数字
		/[\~\`\!\@\#\$\%\^\&\*\(\)\-\_\+\=\\\|\[\]\{\}\;\:\"\'\,\<\.\>\/\?]/ // 标点
	];

	return {
		trim: function(value) { // 字符串整理
			return (value + '').trim();
		},
		empty: function(value) { // 是否为空
			if (typeof value === 'undefined' || value == undefined) { // null, undefined
				return true;
			}
			if (typeof value === 'string') {
				return value.trim() === '';
			}
			if ($.isArray && $.isArray(value)) {
				return value.length === 0;
			}
			if ($.isPlainObject && $.isPlainObject(value)) {
				return $.isEmptyObject(value);
			}
			if ($.isNumeric && $.isNumeric(value)) {
				return parseFloat(value) === 0;
			}
			return false;
		},
		number: function(value) { // 数字类型
			return $.isNumeric(value);
		},
		characters: function(value) { // 字符种类数
			var count = 0;
			charactersRegs.forEach(function(re) {
				re.test(value) && count++;
			});
			return count;
		},
		// /^[a-zA-Z\d\~\`\!\@\#\$\%\^\&\*\(\)\-\_\+\=\\\|\[\]\{\}\;\:\"\'\,\<\.\>\/\?]+$/.test(value) 串联正则
		charactersReg: new RegExp('^' + charactersRegs.join('').replace(/^\/|\/$|\]\/\/\[/g, '') + '+$'),
	}
});