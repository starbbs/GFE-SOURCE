// 张树垚 2016-04-08 19:25:00 创建
// on-off-one 自定义方法绑定


define('on', function() {

	var error = function(msg) { // 打印错误
		console.log('Error: (on-off-one) ' + msg);
	};
	var exist = function(name) { // 存在
		return Array.isArray(this.__on[name]);
	};

	var On = function() {
		this.__on = {};
	};

	// 继承方法
	// var someClass = function() {
	// 	On.call(this);
	// };
	// $.extend(someClass.prototype, On.prototype);

	// On.prototype.limite = function(arr) { // 设置限定数组(命名问题, 暂时废弃)
	// 	this.__on.__limite = arr;
	// };
	On.prototype.on = function(name, data, fun, one) {
		if (typeof data === 'function') {
			fun = data;
			data = {};
		}
		// if (!this.__on.__limite || this.__on.__limite.indexOf(name) > -1) {
		this.__on[name] = this.__on[name] || [];
		this.__on[name].push({
			name: name,
			data: data,
			fun: fun,
			one: one
		});
		// } else {
		// 	error(name + '不在限制名单中');
		// }
	};
	On.prototype.off = function(name, fun) { // 解绑
		if (!name) { // 解绑全部
			this.__on = {};
			return;
		} else if (!fun) { // 解绑一类
			if (exist.call(this, name)) {
				this.__on[name].length = 0;
			} else {
				error('off错误, ' + name + '并不存在');
			}
		} else { // 解绑一个
			var i = 0;
			while (i < this.__on.length) {
				if (this.__on[i].fun === fun) {
					this.__on.splice(i, 1);
				} else {
					i++;
				}
			}
		}
	};
	On.prototype.one = function(name, data, fun) { // 执行一次
		this.on.call(this, name, data, fun, true);
	};
	On.prototype.trigger = function(name, data) { // 触发
		if (exist.call(this, name)) {
			this.__on[name].forEach(function(item) {
				var event = { // 事件对象
					name: item.name,
					data: $.extend(item.data, data),
				};
				item.fun.call(this, event);
				item.one && setTimeout(function() { // 执行一次
					this.off(item.name, item.fun);
				}.bind(this));
			}.bind(this));
		} else {
			error('trigger错误, ' + name + '并不存在');
		}
	};

	return On;
});