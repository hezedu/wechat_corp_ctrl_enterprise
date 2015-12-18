# wechat_corp_ctrl_enterprise
阿里的微信SDK扩展————第三方控制企业号组件
## 安装
`npm install wechat_corp_ctrl_enterprise`
## 注意
依赖是使用的`wechat-enterprise-api`fork临时版本：

https://github.com/node-webot/wechat-enterprise-api/tarball/f96840bf9ec3d5da6baf4beef5fa74aec27c062d

## 使用
```js
var ctrlEnterprise = require('wechat_corp_ctrl_enterprise');

var access_token =  'wxxxxxxxxxx-dddsfsafsdf--ssss'; //通过永久授权码获取的access_token,请自行解决缓存问题。
var auth_corpid = 'wxxxxxxxxxx';

var Api = ctrlEnterprise(auth_corpid, access_token);
//然后用法跟操作企业一样： https://github.com/node-webot/wechat-enterprise-api 。
```
