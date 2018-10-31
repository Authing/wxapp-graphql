# wxapp-graphql


## 使用方法

### 使用 NPM 安装

``` shell
$ npm install wxapp-graphql
```

如何在小程序里使用 NPM，请参考[这篇文章](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

### 使用

``` javascript

// 引入文件
var gql = require('wxapp-graphql');
var GraphQL = gql.GraphQL;

Page({
  test: function() {

    // 初始化对象
    let gql = GraphQL({
      url: 'https://users.authing.cn/graphql' // url必填 
    }, true); //第二个参数的true代表是否使用对象方法，如 gql.query 或 gql.mutate，默认是函数方法，如 gql({body: {query: '', variables: {}}})，建议写 true，为 true 时可以使用 promise

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

### 另外一种使用方法（可选）

``` shell
var gql = require('path/to/graphql/wxgql.js');
var GraphQL = gql.GraphQL;

Page({
  test: function() {
    let gql = GraphQL({
      url: 'https://users.authing.cn/graphql' // url 必填 
    });
    
    gql({
      // 示例 GraphQL 查询, body 必填
      body: {
        query: `query getAccessTokenByAppSecret($secret: String!, $clientId: String!){
    getAccessTokenByAppSecret(secret: $secret, clientId: $clientId)
}`,
        variables: {
          secret: '427e24d3b7e289ae9469ab6724dc7ff0',
          clientId: '5a9fa26cf8635a000185528c'
        }
      },

      // 成功
      success: function (res) {
        console.log(res);
      },

      // 失败
      fail: function (res) {
        console.log(res);
      },

      // 执行完成
      complete: function (res) {
        console.log(res);
      }
    });
});
```

全局详细配置请查看[example]()