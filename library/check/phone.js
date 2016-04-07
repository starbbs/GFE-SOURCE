// 张树垚 2016-04-06 15:38:09 创建
// 手机号校验

define('check-phone', ['check-common', 'check-message'], function(common, message) {
	var phoneReg = /^(\+86)?((13[0-9])|(14[57])|(15[0-35-9])|(17[0678])|(18[0-9]))\d{8}$/;
	return {
		phone: function(value) { // 手机号校验
			if (common.empty(value)) {
				return message.result('311');
			}
			return message.result(phoneReg.test(value + '') ? '200' : '310');
		},
		phoneCondition: function(value) {
			return value.length >= 11;
		},
	};
});

