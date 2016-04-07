// 张树垚 2016-04-06 16:23:39 创建
// 校验码

define('check-ident', ['check-common', 'check-message'], function(common, message) {
	return {
		ident: function(value) { // 验证码
			return message.result(/\d{6}/.test(common.trim(value)) ? '200' : '340');
		},
		identCondition: function(value) {
			return value.length >= 6;
		},
	};
});

