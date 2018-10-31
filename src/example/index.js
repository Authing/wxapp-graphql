var gql = require('./graphql');

Page({
  test: function() {

    gql.query({query:`query getAccessTokenByAppSecret($secret: String!, $clientId: String!){
    getAccessTokenByAppSecret(secret: $secret, clientId: $clientId)`,variables: {
        secret: '427e24d3b7e289ae9469ab6724dc7ff0',
        clientId: '5a9fa26cf8635a000185528c'
    }}).then(function (res) {
        //do something
    })


  }
});
