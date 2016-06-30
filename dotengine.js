/*

dotEngine server SDK

*/


var net = require('net');



var DotEngine = function (appKey,appSecret,env) {

    if (!(this instanceof DotEngine)) return new DotEngine(apiKey, apiSecret, env);

    this.appKey = appKey;
    this.appSecret = appSecret;

};


DotEngine.prototype.createToken = function(opts,callback){



}
