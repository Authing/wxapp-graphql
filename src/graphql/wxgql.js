var responseHandler = function(resolve, reject, res, errorHandler) {
    var retData = res.data.errors ? res.data.errors[0].message : {
        code: 200
    };
    if(res.statusCode == 200 && retData.code ==200) {
        resolve(res.data.data);
    } else {
        reject(res.data);
        if (errorHandler) {
            errorHandler(res.data);
        }
    }
}

var GraphQL = function(obj, retObj) {

    if (!obj.url) {
        throw "请提供GraphQL请求URL(.url)"
    }


    retObj = retObj || false;

    if(retObj) {
        return {
            query: function(queryObj) {
                return new Promise(function(resolve, reject) {
                    wx.request({
                        url: obj.url,
                        method: 'POST',
                        data: JSON.stringify({
                            query: queryObj.query,
                            variables: queryObj.variables
                        }),
                        header:obj.header(),
                        complete: function(res) {
                            responseHandler(resolve, reject, res,obj.errorHandler);
                        }
                    });
                });
            },

            mutate: function(mutateObj) {
                return new Promise(function(resolve, reject) {
                    wx.request({
                        url: obj.url,
                        method: 'POST',
                        data: JSON.stringify({
                            query: mutateObj.mutation,
                            variables: mutateObj.variables
                        }),
                        header: obj.header || mutateObj.header,
                        complete: function(res) {
                            responseHandler(resolve, reject, res);
                        }
                    });
                });
            }
        }
    } else {
        return function (_obj) {

            if (!_obj.body) {
                throw "请提供GraphQL请求body"
            }

            return wx.request({
                url: obj.url,
                method: 'POST',
                data: JSON.stringify(_obj.body),
                success: _obj.success,
                fail: _obj.fail,
                header: obj.header() || _obj.header(),
                complete: _obj.complete
            });
        }
    }
}

module.exports = {
    GraphQL: GraphQL
}
