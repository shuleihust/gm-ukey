const axios = require('axios')
const BASE_URL = 'http://localhost:29527/api/v1/'

/**
 * @param {Object} url
 * @param {Object} params
 */
function post(url,params){
	return new Promise((resolve, reject) => {
		params = params || {}
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
export function version() {
	return post('version')
}

/**
 * 随机数
 */
export function random(params={}) {
	if (!params.len) params.len = 32
	return post('random', params)
}

/**
 * sm2消息签名
 */
export function sm2sign(params={}) {
	if (!params.ida) params.ida = '1234567812345678'
	return post('sm2sign', params)
}

/**
 * sm2文件签名
 */
export function sm2signFile(params={}) {
	if (!params.ida) params.ida = '1234567812345678'
	return post('sm2sign', params)
}

/**
 * sm2消息校验
 */
export function sm2verify(params={}) {
	if (!params.ida) params.ida = '1234567812345678'
	return post('sm2verify', params)
}

/**
 * sm2文件校验
 */
export function sm2verifyFile(params={}) {
	if (!params.ida) params.ida = '1234567812345678'
	return post('sm2verify', params)
}

/**
 * 字符串对称加密
 */
export function encrypt(params={}) {
	if (!params.alg) params.alg = 257
	return post('encrypt', params)
}

/**
 * 字符串对称解密
 */
export function decrypt(params={}) {
	if (!params.alg) params.alg = 257
	return post('decrypt', params)
}

/**
 * 读取key证书信息
 */
export function certparse(params={}) {
	if (!params.bsign) params.bsign = 0
	return post('certparse', params)
}

/**
 * 导出证书
 */
export function certexport(params={}) {
	if (!params.bsign) params.bsign = 0
	return post('certexport', params)
}

/**
 * PIN码校验
 */
export function pinverify(params={}) {
	return post('pinverify', params)
}

/**
 * 更改PIN码
 */
export function pinchange(params={}) {
	return post('pinchange', params)
}

/**
 * 生成P7(SM2WithSM3)
 */
export function genp7(params={}) {
	if (!params.ida) params.ida = '1234567812345678'
	return post('genp7', params)
}