# wxapp-graphql

微信小程序GraphQL客户端，点击图片观看演示demo

[![Watch the video](https://usercontents.authing.cn/20180528-184211@2x.png)](https://usercontents.authing.cn/20180528-183158-HD.mp4)

## 使用方法

### clone项目

``` shell
git clone https://github.com/Authing/wxapp-graphql
```

### 将文件中的graphql文件夹复制到你的项目中并开始使用

``` javascript

// 引入文件
var gql = require('path/to/graphql/wxgql.js');
var GraphQL = gql.GraphQL;

Page({
  test: function() {

    // 初始化对象
    let gql = GraphQL({
      url: 'https://users.authing.cn/graphql' // url必填 
    });

    gql({

      // 示例GraphQL查询, body必填
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

  }
});


```

## TODO

1. 兼容NPM

