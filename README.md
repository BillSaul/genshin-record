[国内文档地址](https://www.meowpass.com/pages/1922ab/)

**游戏现在能查询6个月以内的抽奖记录了(以前是1个月)，所以打算调整一下这个项目的功能，敬请期待...!**

# 功能

- **手动**记录抽奖次数、五星出货记录。
  - 用`重置次数`按钮来重置周期
  - 每期up池结束。需要手动去数据库重置本期卡池次数
  - 出货记录显示的图标，请自己添加
- **自动**计算大保底还是小保底、距离保底剩余次数
- 历史UP卡池记录(**手动**修改)
  - 需要自己去源代码中修改历史up池的数据
- **身份验证**，进入页面读取数据之前，需要验证身份，读取对应数据
  - 密码采用sha1加密

# 相关信息

- [Vue-CLI](https://cli.vuejs.org/zh/)开发
- UI组件库：[element-ui](https://element.eleme.cn/#/zh-CN)
- 后端数据库：[leancloud](https://www.leancloud.cn/)
- 插件：[Vuex](https://vuex.vuejs.org/zh/)，sha1

- 目录结构：

```
.
│
├── dist (打包生成目录)
├── public
├── src
│   ├── api (数据库相关文件)
│   ├── assets (静态资源)
│   │   ├── arms-img (武器up池封面)
│   │   ├── cover-img (角色up池封面)
│   │   └── icon-img (五星出货图标)
│   ├── components (Vue组件)
│   ├── css
│   └── store (Vuex插件目录)
├── App.vue
├── vue.config.js
└── main.js
```

# 使用方法

克隆本仓库到本地

```
git clone https://github.com/BillSaul/genshin-record.git
```

## 环境要求

- nodejs
- yarn

## 获取AppID、AppKey和服务器地址

请先[登录](https://leancloud.cn/dashboard/login.html#/signin)或[注册](https://leancloud.cn/dashboard/login.html#/signup) ``LeanCloud``, 进入[控制台](https://leancloud.cn/dashboard/applist.html#/apps)后点击左下角[创建应用](https://leancloud.cn/dashboard/applist.html#/newapp)：

![](https://i.loli.net/2019/06/21/5d0c995c86fac81746.jpg)

创建好后，进入刚刚创建的应用，选择左下角的``设置``->``应用 Keys``，就能看到AppID、AppKey和服务器地址

![](https://cdn.jsdelivr.net/gh/billsaul/genshin-record/screenshot3.png)

## 初始化数据库

### 创建Class

本项目没有相关数据创建的操作，所有数据的创建，需自己进入``LeanCloud``手动创建。左上角`储存`->`结构化数据`->`创建class`，需要创建2个class，`data`和`user`。创建好后，点击`添加列`添加字段

![](https://cdn.jsdelivr.net/gh/billsaul/genshin-record/screenshot4.png)

`data`字段说明：

| 字段         | 类型   | 说明                                 |
| ------------ | ------ | ------------------------------------ |
| id           | string | 用户唯一标识，必须与`user`内的id对应 |
| roleNum      | string | 角色up池的抽奖次数（90次为一个周期） |
| roleThis_num | string | 本期角色up池的抽奖次数               |
| roleInfo     | string | 角色up池是大保底还是小保底           |
| roleGet      | string | 角色up的五星出货记录，已`/`为分隔符  |
| armsNum      | string | 武器up池的抽奖次数（90次为一个周期） |
| armsThis_num | string | 本期角色up池的抽奖次数               |
| armsInfo     | string | 武器up池是大保底还是小保底           |
| armsGet      | string | 武器up的五星出货记录，已`/`为分隔符  |
| permanentNum | string | 常驻池的抽奖次数                     |
| permanentGet | string | 常驻池的五星出货记录，已`/`为分隔符  |

`user`字段说明：

| 字段     | 类型   | 说明                                 |
| -------- | ------ | ------------------------------------ |
| id       | string | 用户唯一标识，必须与`data`内的id对应 |
| password | string | 用户密码，sha1加密                   |

### 配置数据库

将`./src/api/`中的`LeanCloud-Demo.js`和`DataServer-Demo.js`修改为`LeanCloud.js`和`DataServer.js`

在`LeanCloud.js`中填入AppID、AppKey和服务器地址：

```
// LeanCloud.js

import AV from 'leancloud-storage';

AV.init({
    appId: "AppID",
    appKey: "AppKey",
    serverURL: "服务器地址"
});

export default AV
```

可选配置：

```
// DataServer.js

let sql_data = 'data' // 储存数据的表
let sql_user = 'user' // 储存用户ID的表
```

## 创建vue.config.js

如果你是将网站托管到github pages或者是gitee pages之类的网站上，则必须在项目根目录创建`vue.config.js`文件。如果是服务器上，则可以不创建

```
// vue.config.js

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/替换成你的仓库名字/'
        : '/'
}
```

## 启动本地调试

```
yarn serve
```

启动成功后访问`http://localhost:8080/`查看效果

## 打包构建

```
yarn build
```

构建输出为 dist 目录

## 部署

打包构建成功后，就可以自己部署到github pages之类的托管平台上，或者是部署到自己的服务器上。具体方法网上有很多，这里不多赘述了。

# 相关截图

![](https://cdn.jsdelivr.net/gh/billsaul/genshin-record/screenshot1.png)

![](https://cdn.jsdelivr.net/gh/billsaul/genshin-record/screenshot2.png)
