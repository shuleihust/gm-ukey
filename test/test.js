const chai = require('chai')
const should = chai.should()
const GMUKey = require('../src/index')

describe("国密GMUKey接口测试",() => {
	it('版本',async () => {
	    const res = await GMUKey.version();
		res.code.should.equal(0)
	})
	
	it('随机数',async () => {
	    const res = await GMUKey.random({
			len:16
		})
		res.code.should.equal(0)
	})
	
	it('sm2消息签名',async () => {
	    const res = await GMUKey.sm2sign({
			msg: 'abc',
			pin: '111111',
			ida:'1234567812345678'
		})
		res.code.should.equal(0)
	})
	
	it('sm2文件签名',async () => {
	    const res = await GMUKey.sm2signFile({
			path: 'D:\\a.txt',
			pin: '111111',
			ida:'1234567812345678'
		})
		res.code.should.equal(0)
	})
	
	it('sm2消息校验',async () => {
	    const res = await GMUKey.sm2verify({
			msg: 'abc',
			signature: 'MEQCIDBoUAUSlS4IGoSYolrGR50DnqJzl+szorMB5Xxd5b8+AiBxWjXoMpgy9Vt4RoeFNiOb/WPiT3pf17m2uEIfSvhkXg==',
			ida:'1234567812345678'
		})
		res.code.should.equal(0)
	})
	
	it('sm2文件校验',async () => {
	    const res = await GMUKey.sm2verifyFile({
			path: 'D:\\a.txt',
			signature: 'MEQCIH9sCan98Hkm/VPMuexLef+8gCOhlA+k2IJMRNiax3JLAiB2PC9PuYsuCFOAtZJSuu/eGOTFi554XD4ZOecOtZYvBQ==',
			ida:'1234567812345678'
		})
		res.code.should.equal(0)
	})
	
	it('字符串对称加密',async () => {
	    const res = await GMUKey.encrypt({
			pin:'111111',
			key:'1234567812345678',
			msg: 'abc',
			alg:257
		})
		res.code.should.equal(0)
	})
	
	it('字符串对称解密',async () => {
	    const res = await GMUKey.decrypt({
			pin:'111111',
			key:'1234567812345678',
			msg: '5hSmENb1hSU0Mbptm7Gvpg==',
			alg:257
		})
		res.code.should.equal(0)
	})
	
	it('读取key证书信息',async () => {
	    const res = await GMUKey.certparse({
			bsign: 1
		})
		res.code.should.equal(0)
	})
	
	it('导出证书',async () => {
	    const res = await GMUKey.certexport({
			bsign: 1
		})
		res.code.should.equal(0)
	})
	
	it('PIN码校验',async () => {
	    const res = await GMUKey.pinverify({
			pin: '111111'
		})
		res.code.should.equal(0)
	})
	
	it('更改PIN码',async () => {
	    const res = await GMUKey.pinchange({
			pin: '111111',
			newpin: '111111'
		})
		res.code.should.equal(0)
	})
	
	it('生成P7(SM2WithSM3)',async () => {
	    const res = await GMUKey.genp7({
			pin: '111111',
			path: 'D:\\a.txt',
			section:'0,10',
			ida: '1234567812345678'
		})
		res.code.should.equal(0)
	})
})