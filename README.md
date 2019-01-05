# wxapp-graphql

一个适用于小程序的 GraphQL 客户端，由 [Authing](https://authing.cn) 开发维护。

## 使用 NPM 安装

``` shell
$ npm install wxapp-graphql
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
