// 张树垚 2015-08-20 09:22:35 创建
// 请求后端



define('api', ['cookie', 'filters', 'h5-alert', 'h5-wait'], function() {

	var api = {};

	var baseUri;
	var useJSON;
	api.init = function(options) {
		baseUri = options.baseUri || '.';
		useJSON = options.useJSON || true;
	};

	/** [add 添加接口]
	 * @Author   张树垚
	 * @Date     2015-10-13
	 * @param    {[string]}		      name                     [api名称]
	 * @param    {[string]}           url                      [api地址]
	 * @param    {[json]}             options                  [api地址]
	 *           {[function]}         options.callback         [接口固定回调]
	 *           {[boolean]}          options.asyn             [是否异步请求]
	 *           {[array]}            options.ignoreStatus     [忽略状态码的默认提示]
	 * @特点:
	 *     1.同步请求, 连续请求会自动中断上一个
	 */
	var add = api.add = function(name, url, options) {
		if (name in api) {
			alert('api名称' + name + '已存在!');
			return;
		}
		for (var i in api) {
			if (api.hasOwnProperty(i) && api[i] === url) {
				alert('该接口地址' + url + '已添加!');
				return;
			}
		}
		var xhr = null;
		options = options || {};
		api[name] = function(data, success) { // 每个接口具体请求
			if (xhr && !options.asyn) {
				xhr.abort();
				xhr = null;
				return;
			}
			if (typeof data === 'function') {
				success = data;
				data = {};
			}
			// console.log(url);
			xhr = $.ajax({
				url: baseUri + url,
				type: 'post',
				data: useJSON ? JSON.stringify(data) : data,
				dataType: 'json',
				timeout: 30000,
				success: function() {
					if (api.onSuccess && api.onSuccess.apply(this, arguments) === false) {
						return false;
					}
					options.callback && options.callback.apply(this, arguments);
					success && success.apply(this, arguments);
				},
				error: function(xhrObj, text, err) {
					console.log('Error: ', arguments);
					if (api.onError && api.onError.apply(this, arguments)) {
						return false;
					}
				},
				complete: function() {
					xhr = null;
				}
			});
		};
	};

	/** 打印一条醒目的信息
	 * @Author   张树垚
	 * @DateTime 2015-10-29
	 * @param    {string}     msg  [信息]
	 * @return
	 */
	api.log = function(msg) {
		console.log('%c' + msg,
			'color: white;' +
			'background-color: red;' +
			'padding: .4em 1.5em;' +
			'font-size: 20px;' +
			'font-weight: bold;' +
			'border-radius: 8px;' +
			'border: 2px solid gray;' +
			'text-shadow: 0px 0px 1px rgba(0,0,0,1);' +
			'height: 30px;' +
			'cursor: pointer;' +
			''
		);
	};

	return api;
});