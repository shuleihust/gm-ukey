const axios = require('axios')
const BASE_URL = 'http://localhost:29527/api/v1/'
const DEFAULT_IDA = '1234567812345678'
const DEFAULT_ALG = 257

/**
 * @param {Object} url
 * @param {Object} params
 */
function post(url,params){
	return new Promise((resolve, reject) => {
		params = params || {}
		params.ts = new Date().getTime()
		axios.post(BASE_URL + url, params).then(res => {
			if (typeof res.data === 'object') {
				resolve(res.data)
			} else {
				reject(res.data)
			}
		}).catch(res => {
			if (res.code == 'ECONNREFUSED') {
				resolve({
					code: -1,
					msg: '服务未启动'
				})
			} else {
				reject(res)
			}
		})
	})
}

/**
 * 版本
 */
function version() {
	return post('version')
}

/**
 * 随机数
 */
function random(params={}) {
	if (!params.len) params.len = 32
	return post('random', params)
}

/**
 * sm2消息签名
 */
function sm2sign(params={}) {
	if (!params.ida) params.ida = DEFAULT_IDA
	return post('sm2sign', params)
}

/**
 * sm2文件签名
 */
function sm2signFile(params={}) {
	if (!params.ida) params.ida = DEFAULT_IDA
	return post('sm2sign', params)
}

/**
 * sm2消息校验
 */
function sm2verify(params={}) {
	if (!params.ida) params.ida = DEFAULT_IDA
	return post('sm2verify', params)
}

/**
 * sm2文件校验
 */
function sm2verifyFile(params={}) {
	if (!params.ida) params.ida = DEFAULT_IDA
	return post('sm2verify', params)
}

/**
 * 字符串对称加密
 */
function encrypt(params={}) {
	if (!params.alg) params.alg = DEFAULT_ALG
	return post('encrypt', params)
}

/**
 * 字符串对称解密
 */
function decrypt(params={}) {
	if (!params.alg) params.alg = DEFAULT_ALG
	return post('decrypt', params)
}

/**
 * 读取key证书信息
 */
function certparse(params={}) {
	if (!params.bsign) params.bsign = 0
	return post('certparse', params)
}

/**
 * 导出证书
 */
function certexport(params={}) {
	if (!params.bsign) params.bsign = 0
	return post('certexport', params)
}

/**
 * PIN码校验
 */
function pinverify(params={}) {
	return post('pinverify', params)
}

/**
 * 更改PIN码
 */
function pinchange(params={}) {
	return post('pinchange', params)
}

/**
 * 生成P7(SM2WithSM3)
 */
function genp7(params={}) {
	if (!params.ida) params.ida = DEFAULT_IDA
	return post('genp7', params)
}

module.exports = {
	post,
	version,
	random,
	sm2sign,
	sm2signFile,
	sm2verify,
	sm2verifyFile,
	encrypt,
	decrypt,
	certparse,
	certexport,
	pinverify,
	pinchange,
	genp7
}