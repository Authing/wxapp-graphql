var gql = require('../graphql/wxgql.js');
var GraphQL = gql.GraphQL;

Page({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  },
  test: function() {

    let gql = GraphQL({
      url: 'https://users.authing.cn/graphql'
    });

    gql({
      body: {
        query: `query getAccessTokenByAppSecret($secret: String!, $clientId: String!){
    getAccessTokenByAppSecret(secret: $secret, clientId: $clientId)
}`,
        variables: {
          secret: '850280a3d20e1ae833dca3d80083b776',
          clientId: '5b013d0b096aa60001cb26f6'
        }
      },
      success: function (res) {
        console.log(res);
      }      
    });

  }
});
