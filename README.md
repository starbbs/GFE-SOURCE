
# GFE-SOURCE

created by [ccforeverd](https://github.com/ccforeverd)

> 果仁宝公司前端团队公用资源


## document

> 文档

1. [果仁宝前端架构.png](https://github.com/starbbs/GFE-SOURCE/blob/master/document/1.%E6%9E%9C%E4%BB%81%E5%AE%9D%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84.png) --- 早期制定的架构规范
2. [果仁宝前端gulp结构.png](https://github.com/starbbs/GFE-SOURCE/blob/master/document/2.%E6%9E%9C%E4%BB%81%E5%AE%9D%E5%89%8D%E7%AB%AFgulp%E7%BB%93%E6%9E%84.png) --- 早期制定的gulp工程化结构
3. [果仁宝官网重构计划.png](https://github.com/starbbs/GFE-SOURCE/blob/master/document/3.%E6%9E%9C%E4%BB%81%E5%AE%9D%E5%AE%98%E7%BD%91%E9%87%8D%E6%9E%84%E8%AE%A1%E5%88%92.png) --- v1.0.0开发完成后制定的重构计划
4. [微信支付配置目录.png](https://github.com/starbbs/GFE-SOURCE/blob/master/document/4.%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98%E9%85%8D%E7%BD%AE%E7%9B%AE%E5%BD%95.png) --- 配置微信公众号支付目录的截图
5. [WEB前端记录.md](https://github.com/starbbs/GFE-SOURCE/blob/master/document/5.WEB%E5%89%8D%E7%AB%AF%E8%AE%B0%E5%BD%95.md) --- 一些前端的记录, 包括规范, 用法等
6. [attention.md](https://github.com/starbbs/GFE-SOURCE/blob/master/document/6.attention.md) --- 产品开发中要注意的一些东西


## library

> 公用代码库, 文件夹分为:

- base  直接引入页面中的js(稍后会去掉)

	- require.js --- 加载器
	- config.js --- requirejs的配置文件, 对应gulp/h5/h5-paths.js, 目前分开写的, 修改编译时需要复制过去

- check 各种校验集合

	- check.js --- 主check文件, 包含老版未分离出校验方法和一些单独的校验
	- common.js --- 公用check文件, 封装一些常用的校验方法
	- ident.js --- 验证码校验
	- message.js --- 校验码文件, 用于管理所有校验输出
	- password.js --- 登录密码校验
	- phone.js --- 手机校验
	- safe.js --- 登录密码安全等级校验

- src   从网上下载的js库,插件等

	- highcharts.js --- 百度的图表库
	- iscroll4.js --- 老版iscroll, 平滑滚动
	- mmHistory.js --- avalon封装的history API
	- mmPromise.js --- avalon封装的promise API
	- mmRouter.js --- avalon封装的路由器API
	- mmState.js --- avalon封装的高级路由器API
	- TouchSlide --- 一个做移动端页面tab切换的插件

- tools 各种工具,插件等

	- api.js --- 封装API类, 统一管理ajax请求
	- bind.js --- 行间属性绑定方法, 用于支持插件编辑
	- cookie.js --- cookie管理插件
	- filters.js --- avalon的自定义过滤器
	- get.js --- 用于页面url的serch参数的转移
	- mydate.js --- 对原生Date对象的增强
	- on.js --- 自定义on-off类
	- router.js --- 对avalon路由的简单封装
	- url.js --- 对页面url的支持


## react-test

> 测试react时创建


## zSass

> 一个sass库, 用于简化和规范化开发, 项目地址: <https://github.com/ccforeverd/zSass>


## 其他文件

- hashMap.js --- (效俭)仿map类型
- highChartsSet.js --- (兵兵)对highCharts的封装
- iscrollLoading.js --- (兵兵)对iscroll的封装


