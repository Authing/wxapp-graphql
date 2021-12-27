# wxapp-graphql

<div align=center><img src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg"></div>
<div align=center>一个适用于小程序的 GraphQL 客户端，由 <a href="https://authing.cn" target="_blank">Authing</a> 开发维护。</div>
<br/>
<div align="center">
  <a href="https://badge.fury.io/js/wxapp-graphql"><img src="https://badge.fury.io/js/wxapp-graphql.svg" alt="npm version" height="18"></a>
  <a href="https://npmcharts.com/compare/wxapp-graphql" target="_blank"><img src="https://img.shields.io/npm/dm/wxapp-graphql" alt="download"></a>
  <a href="https://standardjs.com" target="_blank"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="standardjs"></a>
  <a href="javascript:;" target="_blank"><img src="https://img.shields.io/badge/node-%3E=12-green.svg" alt="Node"></a>
</div>
<br/>

## 使用 NPM 安装

``` shell
$ npm install wxapp-graphql --save
```

如何在小程序里使用 NPM，请参考[这篇文章](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

## 使用

``` javascript

// 引入文件
var gql = require('wxapp-graphql');
var GraphQL = gql.GraphQL;

Page({
  test: function() {

    // 初始化对象
    let gql = GraphQL({
      url: 'https://users.authing.cn/graphql' // url 必填 
    }, true);
    
    // query 查询，mutation 请使用 gql.mutate
    gql.query({
        query: `query getAccessTokenByAppSecret($secret: String!, $clientId: String!){
    getAccessTokenByAppSecret(secret: $secret, clientId: $clientId)
}`,
        variables: {
          secret: '427e24d3b7e289ae9469ab6724dc7ff0',
          clientId: '5a9fa26cf8635a000185528c'
        }
    }).then(function(res) {
      //成功
      console.log(res);
    }).catch(function(error) {
      //失败
      console.log(error);
    });
    
  }
});

```

## 发起 mutation 请求

``` javascript
gql.mutate({
  mutation: 'YOUR_GQL',
  variables: 'YOUR_variables'
})
```

## 配置全局 header 和错误拦截

``` javascript
var gqlwx = require('../graphql/wxgql');
var GraphQL = gqlwx.GraphQL;

var gql = GraphQL({
    //设置全局 url
    url: 'https://users.authing.cn/graphql', // url 必填

    //设置全居动态 header
    header: function () {
        return {
            // something....
            'X-Test-Header': 'test header content'
        }
    },

    //设置全居错误拦截
    errorHandler: function (res) {
        //do something
    }
  }, true
);

module.exports = gql;
```

全局详细配置请查看 [example](https://github.com/Authing/wxapp-graphql/blob/master/src/example/graphql.js).

## 参与贡献
- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push origin my-new-feature)
- Create new Pull Request

## 获取帮助

Join us on forum: [#authing-chat](https://forum.authing.cn/)
