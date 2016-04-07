// 张树垚 2016-04-06 16:35:22 创建
// 登录密码

define('check-password', ['check-common', 'check-message'], function(common, message) {
	return {
		password: function(value) { // 登录密码格式验证
			//密码不为空
			if (common.empty(value)) {
				return message.result('321');
			}
			// 1. 6-20位字符
			if (value.length < 6 || value.length > 20) {
				return message.result('322');
			}
			// 2. 只能包含字母、数字以及标点符号（除空格）
			if (!common.charactersReg.test(value)) {
				return message.result('323');
			}
			// 3. 大写字母、小写字母、数字以和标点符号至少两种
			if (common.characters(value) < 2) {
				return message.result('324');
			}
			return message.result('200');
		},
		passwordCondition: function(value) {
			return value.length >= 6;
		},
	};
});

