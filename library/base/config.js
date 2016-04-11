// 张树垚 2015-10-10 17:45:21 创建
// require.config 配置文件


(function() {

	var PATH_LIBRARY = '../../source/library';

	var H5_FACTORY = '../factory';
	var H5_VIEWS = H5_FACTORY + '/views';
	var H5_COMPONENTS = H5_FACTORY + '/components';
	var H5_DIALOGS = H5_FACTORY + '/dialogs';
	var H5_PAGES = H5_FACTORY + '/pages';
	var H5_SOURCE = '../source';
	
	require.config({
		baseUrl: './',
		paths: {
			// 公用部分 tools
			'api':						PATH_LIBRARY + '/tools/api',
			'bind': 					PATH_LIBRARY + '/tools/bind',
			'cookie':					PATH_LIBRARY + '/tools/cookie',
			'filters':					PATH_LIBRARY + '/tools/filters',
			'get':						PATH_LIBRARY + '/tools/get',
			'mydate':					PATH_LIBRARY + '/tools/mydate',
			'router':					PATH_LIBRARY + '/tools/router',
			'url':						PATH_LIBRARY + '/tools/url',
			// 公用部分 check
			'check':					PATH_LIBRARY + '/check/check',
			'check-common':				PATH_LIBRARY + '/check/common',
			'check-message':			PATH_LIBRARY + '/check/message',
			'check-phone':				PATH_LIBRARY + '/check/phone',
			'check-ident':				PATH_LIBRARY + '/check/ident',
			'check-password':			PATH_LIBRARY + '/check/password',
			'check-safe':				PATH_LIBRARY + '/check/safe',
			// 公用部分 src
			'hchart':					PATH_LIBRARY + '/src/highcharts',
			'mmRouter':					PATH_LIBRARY + '/src/mmRouter',
			'mmHistory':				PATH_LIBRARY + '/src/mmHistory',
			'iScroll4':					PATH_LIBRARY + '/src/iscroll4',
			'touch-slide':				PATH_LIBRARY + '/src/TouchSlide.1.1.source',
			// 公用部分 其他
			'hashMap':					PATH_LIBRARY + '/hashMap',
			'iscrollLoading':			PATH_LIBRARY + '/iscrollLoading',
			'highChartsSet':			PATH_LIBRARY + '/highChartsSet',
			// H5微信端部分 library
			'h5-api':					H5_SOURCE + '/library/h5-api',
			'h5-check':					H5_SOURCE + '/library/check',
			'h5-price':					H5_SOURCE + '/library/price',
			'h5-weixin':				H5_SOURCE + '/library/weixin',
			'h5-authorization':			H5_SOURCE + '/library/authorization',
			'h5-paypass-judge': 		H5_SOURCE + '/library/h5-paypass-judge',
			'h5-order-judge': 			H5_SOURCE + '/library/h5-order-judge',
			// H5微信端部分 components
			'h5-alert':					H5_COMPONENTS + '/alert/alert',
			'h5-button': 				H5_COMPONENTS + '/button/button',
			'h5-bank':					H5_COMPONENTS + '/bank/bank',
			'h5-ident':					H5_COMPONENTS + '/ident/ident',
			'h5-text':					H5_COMPONENTS + '/text/text',
			'h5-paypass':				H5_COMPONENTS + '/paypass/paypass',
			'h5-wait':					H5_COMPONENTS + '/wait/wait',
			'h5-component-bill':		H5_COMPONENTS + '/bill/bill',
			'h5-keyboard':				H5_COMPONENTS + '/keyboard/keyboard',
			// H5微信端部分 dialog
			'h5-dialog':				H5_DIALOGS + '/dialog',
			'h5-dialog-alert':			H5_DIALOGS + '/alert/alert',   
			'h5-dialog-success':		H5_DIALOGS + '/success/success',
			'h5-dialog-info':			H5_DIALOGS + '/info/info',   
			'h5-dialog-confirm':        H5_DIALOGS + '/confirm/confirm',
			'h5-dialog-bankcard':		H5_DIALOGS + '/bankcard/bankcard',
			'h5-dialog-paypass':		H5_DIALOGS + '/paypass/paypass',
			'h5-dialog-more':			H5_DIALOGS + '/more/more',
			// H5微信端部分 view
			'h5-bankcard-append':		H5_VIEWS + '/bankcard/bankcard-append',
			'h5-bankcard-ident':		H5_VIEWS + '/bankcard/bankcard-ident',
			'h5-view':					H5_VIEWS + '/view',
			'h5-view-about-us':			H5_VIEWS + '/about-us/about-us',
			'h5-view-address-mine':		H5_VIEWS + '/address/address-mine',
			'h5-view-address-wallet':	H5_VIEWS + '/address/address-wallet',
			'h5-view-authentication':	H5_VIEWS + '/authentication/authentication',
			'h5-view-agreement':		H5_VIEWS + '/agreement/agreement',
			'h5-view-bill':				H5_VIEWS + '/bill/bill', 
			'h5-view-choose':			H5_VIEWS + '/choose/choose',
			'h5-view-login':			H5_VIEWS + '/login/login',
			'h5-view-password':			H5_VIEWS + '/password/password',
			'h5-view-nickname':			H5_VIEWS + '/nickname/nickname',
		},
		shim: {
			jquery: {
				exports: "jQuery"
			},
			$: {
				exports: "jQuery"
			}
		},
		include: [],
		module: []
	});
})();