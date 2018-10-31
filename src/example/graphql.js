var gqlwx = require('../graphql/wxgql');
var GraphQL = gqlwx.GraphQL;


var gql = GraphQL(
    {
        //设置全居url
        url: 'http://127.0.0.1:7001/graphql', // url必填
        //设置全居动态header
        header: function () {
            return {
                // something....
            }
        },
        //设置全居错误拦截
        errorHandler: function (res) {
            //do something
        }
    }, true
); //第二个参数的true代表是否使用对象方法，如 gql.query 或 gql.mutate，默认是函数方法，如 gql({body: {query: '', variables: {}}})，建议写 true，为 true 时可以使用 promise


module.exports = gql;
