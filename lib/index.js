'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.version = version;
exports.random = random;
exports.sm2sign = sm2sign;
exports.sm2signFile = sm2signFile;
exports.sm2verify = sm2verify;
exports.sm2verifyFile = sm2verifyFile;
exports.encrypt = encrypt;
exports.decrypt = decrypt;
exports.certparse = certparse;
exports.certexport = certexport;
exports.pinverify = pinverify;
exports.pinchange = pinchange;
exports.genp7 = genp7;
var axios = require('axios');
var BASE_URL = 'http://localhost:29527/api/v1/';

/**
 * @param {Object} url
 * @param {Object} params
 */
function post(url, params) {
	return new Promise(function (resolve, reject) {
		params = params || {};
		axios.post(BASE_URL + url, params).then(function (res) {
			if (_typeof(res.data) === 'object') {
				resolve(res.data);
			} else {
				reject(res.data);
			}
		}).catch(function (res) {
			if (res.code == 'ECONNREFUSED') {
				resolve({
					code: -1,
					msg: '服务未启动'
				});
			} else {
				reject(res);
			}
		});
	});
}

/**
 * 版本
 */
function version() {
	return post('version');
}

/**
 * 随机数
 */
function random() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!params.len) params.len = 32;
	return post('random', params);
}

/**
 * sm2消息签名
 */
function sm2sign() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!params.ida) params.ida = '1234567812345678';
	return post('sm2sign', params);
}

/**
 * sm2文件签名
 */
function sm2signFile() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!params.ida) params.ida = '1234567812345678';
	return post('sm2sign', params);
}

/**
 * sm2消息校验
 */
function sm2verify() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!params.ida) params.ida = '1234567812345678';
	return post('sm2verify', params);
}

/**
 * sm2文件校验
 */
function sm2verifyFile() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!params.ida) params.ida = '1234567812345678';
	return post('sm2verify', params);
}

/**
 * 字符串对称加密
 */
function encrypt() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!params.alg) params.alg = 257;
	return post('encrypt', params);
}

/**
 * 字符串对称解密
 */
function decrypt() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!params.alg) params.alg = 257;
	return post('decrypt', params);
}

/**
 * 读取key证书信息
 */
function certparse() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!params.bsign) params.bsign = 0;
	return post('certparse', params);
}

/**
 * 导出证书
 */
function certexport() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!params.bsign) params.bsign = 0;
	return post('certexport', params);
}

/**
 * PIN码校验
 */
function pinverify() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	return post('pinverify', params);
}

/**
 * 更改PIN码
 */
function pinchange() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	return post('pinchange', params);
}

/**
 * 生成P7(SM2WithSM3)
 */
function genp7() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!params.ida) params.ida = '1234567812345678';
	return post('genp7', params);
}