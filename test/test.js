const chai = require('chai')
const should = chai.should()
const UKey = require('../lib/index')

describe("国密UKey接口测试",() => {
    it('测试版本',() => {
        UKey.version().then(res => {
			console.log(res);
		}).catch(res => {
			console.log(res);
		});
    })
	
	it('测试随机数',() => {
	    UKey.random({
			len:16
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
	
	it('sm2消息签名',() => {
	    UKey.sm2sign({
			msg: 'abc',
			pin: '111111',
			ida:'1234567812345678'
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
	
	it('sm2文件签名',() => {
	    UKey.sm2signFile({
			path: 'D:\\a.txt',
			pin: '111111',
			ida:'1234567812345678'
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
	
	it('sm2消息校验',() => {
	    UKey.sm2verify({
			msg: 'abc',
			signature: 'MEQCIDBoUAUSlS4IGoSYolrGR50DnqJzl+szorMB5Xxd5b8+AiBxWjXoMpgy9Vt4RoeFNiOb/WPiT3pf17m2uEIfSvhkXg==',
			ida:'1234567812345678'
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
	
	it('sm2文件校验',() => {
	    UKey.sm2verifyFile({
			path: 'D:\\a.txt',
			signature: 'MEQCIH9sCan98Hkm/VPMuexLef+8gCOhlA+k2IJMRNiax3JLAiB2PC9PuYsuCFOAtZJSuu/eGOTFi554XD4ZOecOtZYvBQ==',
			ida:'1234567812345678'
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
	
	it('字符串对称加密',() => {
	    UKey.encrypt({
			pin:'111111',
			key:'1234567812345678',
			msg: 'abc',
			alg:257
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
	
	it('字符串对称解密',() => {
	    UKey.decrypt({
			pin:'111111',
			key:'1234567812345678',
			msg: '5hSmENb1hSU0Mbptm7Gvpg==',
			alg:257
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
	
	it('读取key证书信息',() => {
	    UKey.certparse({
			bsign: 1
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
	
	it('导出证书',() => {
	    UKey.certexport({
			bsign: 1
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
	
	it('PIN码校验',() => {
	    UKey.pinverify({
			pin: '111111'
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
	
	it('更改PIN码',() => {
	    UKey.pinchange({
			pin: '111111',
			newpin: '111111'
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
	
	it('生成P7(SM2WithSM3)',() => {
	    UKey.genp7({
			pin: '111111',
			path: 'D:\\a.txt',
			section:'0,10',
			ida: '1234567812345678'
		}).then(res => {
			console.log(res);
		}).catch(res => {
			console.error(res);
		});
	})
})