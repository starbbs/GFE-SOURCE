// 张树垚 2016-04-06 16:23:39 创建
// 密码安全等级

define('check-safe', ['check-common', 'check-message', 'check-password'], function(common, message, checkPassword) {

	var condition = function(value) { // 校验条件
		return value.length >= 6;
	};

	return {
		safe: function(value, withoutPassword) {
			if (condition(value)) {
				if (!withoutPassword) { // 是否验证密码格式
					if (checkPassword.password(value).result === false) {
						return '低';
					}
				}
				// total: 总等级数
				// 字符种类数/字符位数   6-10位(0)   11-15位(1)   16-20位(2)
				//       2(0)           低(0)       低(1)        中(2)
				//       3(1)           低(1)       中(2)        高(3)
				//       4(2)           中(2)       高(3)        高(4)
				var num = function(arr, str) { // 判断位置
					var now = arr.length - 1;
					for (var i = 0; i < arr.length; i++) {
						if (arr[i] > str) {
							now--;
						}
					}
					return now;
				};
				return ['低', '低', '中', '高', '高'][num([6, 11, 16], value.length) + num([2, 3, 4], common.characters(value))];
			}
		},
		safeCondition: condition,
	};
});