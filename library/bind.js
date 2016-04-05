// 张树垚 2016-04-02 07:44:30 创建
// H5微信端 --- 行间属性绑定方法


define(function() {
	
	var format = function(string) { // 字符串格式化
		// button-loading => buttonLoading
		return string.split('-').reduce(function(str, item, index, array) {
			if (index === 0) {
				return item;
			}
			return str + item.replace(/^./, function(s) {
				return s.toUpperCase();
			});
		}, '');
	};

	var Bind = function(name) {
		// 属性
		this.name = name; // keyboard 或 button-loading
		this.handles = null;
		this.formatName = format(name);
	};
	// 类方法
	Bind.format = format;
	// 原型链方法
	Bind.prototype.setHandles = function(json) {
		this.handles = json;
	};
	Bind.prototype.scan = function(context) {
		//data-keyboard="hide(contacts-search-input,id1,id2)|hide(other-input,id3)"
		$('[data-' + this.name + ']', context).each(function(i, element) {
			element.dataset[this.formatName].split('|').forEach(function(string) { //遍历属性上的方法
				var match = string.match(/(\w+)(\(([\w\,\-]+)\))?/);
				// ["hide(contacts-search-input,id1,id2)", "hide", "(contacts-search-input,id1,id2)", "contacts-search-input,id1,id2"]
				if (match && this.handles && match[1] in this.handles) { // 匹配成功且方法存在
					this.handles[match[1]].apply(element, match[3] ? match[3].split(',') : []); // handles里的this指向该元素
				} else {
					cconsole.log('Error in Bind: name=' + this.name + ' 匹配失败');
				}
			}.bind(this));
		}.bind(this));
	};

	return Bind;
});

