var gqlwx = require('../graphql/wxgql');
var GraphQL = gqlwx.GraphQL;

var gql = GraphQL(
    {
        //设置全局url
        url: 'https://users.authing.cn/graphql', // url必填

        //设置全居动态header
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
