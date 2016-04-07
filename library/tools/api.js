// 张树垚 2015-08-20 09:22:35 创建
// 请求后端



define('api', function() {


	var Api = function(options) {
		this.options = options; // api通用设置
		this._baseUri = options.baseUri || '.'; // 服务器地址
		this._useJSON = options.useJSON || true; // 默认JSON解析
		this._timeout = options.timeout || 30000; // 默认30秒限制
		this._urls = {}; // 保存所有注册url
	};
	/** 打印一条醒目的信息
	 * @Author   张树垚
	 * @DateTime 2015-10-29
	 * @param    {string}     msg  [信息]
	 * @return
	 */
	Api.log = function(msg) {
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
	Api.prototype.regist = function(name, url, options) {
		var api = this;
		var xhr = null;
		if (name in this) {
			return alert('api名称' + name + '已存在!');
		}
		if (url in this._urls) {
			return alert('该接口地址' + url + '已添加!');
		}
		this._urls[url] = name;
		options = options || {}; // 接口注册时的个别设置
		this[name] = function(data, success, error) { // 每个接口具体请求
			if (xhr && !options.asyn) {
				xhr.abort();
				xhr = null;
				// return;
			}
			if (typeof data === 'function') {
				success = data;
				data = {};
			}
			// console.log(url);
			return xhr = $.ajax({
				url: api._baseUri + url,
				type: 'post',
				data: api._useJSON ? JSON.stringify(data) : data,
				dataType: 'json',
				timeout: api._timeout,
				success: function() {
					if (api.onSuccess && api.onSuccess.apply(this, arguments) === false) {
						return false;
					}
					options.callback && options.callback.apply(this, arguments);
					success && success.apply(this, arguments);
				},
				error: function() {
					console.log('Error: ', arguments);
					if (api.onError && api.onError.apply(this, arguments)) {
						return false;
					}
					error && error.apply(this, arguments);
				},
				complete: function() {
					xhr = null;
				}
			});
		};
	};

	return Api;
});