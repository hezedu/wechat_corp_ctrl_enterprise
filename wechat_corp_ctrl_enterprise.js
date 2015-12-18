var enterprise_api = require('wechat-enterprise-api');

function corpCtrlEnterprise(corpid , access_token){
  enterprise_api.call(this, corpid);
  access_token = {
    accessToken : access_token
  };
  this.getToken = function (callback) {
    callback(null, access_token);
  };
  this.saveToken = function (token, callback) {
    callback(null);
  };
}

corpCtrlEnterprise.prototype.__proto__ = enterprise_api.prototype;

module.exports = function(corpid , access_token){
  return new corpCtrlEnterprise(corpid, access_token);
};