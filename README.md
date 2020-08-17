# gm-ukey

国密证书UkeySDK



### 安装

##### 使用npm

```
$ npm install gm-ukey --save
```

##### 使用cdn

```
<script src="https://shuleihust.gitee.io/gm-ukey/gm-ukey.js"></script>
```



### 使用

##### 使用import或者require引入

```
import GMUkey from 'gm-ukey'

// const GMUkey = require('gm-ukey')
```



##### 异步调用接口

```
GMUKey.version().then(function (res) {
    console.log(res)
}).catch(function (error) {
    console.log(error)
})
```



##### 同步调用接口

```
const res = await GMUKey.version()
console.log(res)
```



### 示例

##### 获取版本

```
const res = await GMUKey.version()
console.log(res)
```



##### 生成随机数

```
const res = await GMUKey.random({
	len:16
})
console.log(res)
```



##### sm2消息签名

```
const res = await GMUKey.sm2sign({
    msg: 'abc',
    pin: '111111',
    ida:'1234567812345678'
})
console.log(res)
```



##### sm2消息校验

```
const res = await GMUKey.sm2verify({
    msg: 'abc',
    signature: sm2Sign,
    ida:'1234567812345678'
})
console.log(res)
```



##### sm2文件签名

```
const res = await GMUKey.sm2signFile({
    path: 'D:\\a.txt',
    pin: '111111',
    ida:'1234567812345678'
})
console.log(res)
```



##### sm2文件校验

```
const res = await GMUKey.sm2verifyFile({
    path: 'D:\\a.txt',
    signature: sm2FileSign,
    ida:'1234567812345678'
})
console.log(res)
```



##### 字符串对称加密

```
const res = await GMUKey.encrypt({
    pin:'111111',
    key:'1234567812345678',
    msg: 'abc',
    alg:257
})
console.log(res)
```



##### 字符串对称解密

```
const res = await GMUKey.decrypt({
    pin:'111111',
    key:'1234567812345678',
    msg: '5hSmENb1hSU0Mbptm7Gvpg==',
    alg:257
})
console.log(res)
```



##### 读取key证书信息

```
const res = await GMUKey.certparse({
	bsign: 1
})
console.log(res)
```



##### 导出证书

```
const res = await GMUKey.certexport({
	bsign: 1
})
console.log(res)
```



##### PIN码校验

```
const res = await GMUKey.pinverify({
	pin: '111111'
})
console.log(res)
```



##### 更改PIN码

```
const res = await GMUKey.pinchange({
    pin: '111111',
    newpin: '111111'
})
console.log(res)
```



##### 生成P7(SM2WithSM3)

```
const res = await GMUKey.genp7({
    pin: '111111',
    path: 'D:\\a.txt',
    section:'0,10',
    ida: '1234567812345678'
})
console.log(res)
```

