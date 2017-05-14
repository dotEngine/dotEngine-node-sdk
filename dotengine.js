'use strict';

/*

dotEngine server SDK
*/


const net = require('net');
const request = require('request');
const jwt = require('jwt-simple');


const dotEngineUrl = 'https://janus.dot.cc/api/';
const tokenExpires = 3600*24;

class DotEngine 
{
    constructor(appkey,appSecret)
    {
        this._appkey = appkey;
        this._appSecret = appSecret;
    }
    get appKey()
    {
        return this._appkey;
    }
    get appSecret()
    {
        return this._appSecret;
    }
    createToken(options,callback)
    {
        let room = options.room;
        let user = options.user;
        let role = '';
        if(options.role){
            role = options.role;
        }
        let expires = tokenExpires;
        if(options.expires){
            expires = options.expires;
        }

        let data = {
            room:room,
            user:user,
            appkey:this._appkey,
            expires:expires,
            role:role 
        };

        let sign = jwt.encode(data,this._appSecret);

        let roptions = {
            uri: dotEngineUrl + 'createToken',
            method:'POST',
            json: {
                appkey:this._appkey,
                sign:sign 
            }
        };

        request(roptions, (error,response,body) => {
            if(!error && response.statusCode == 200){

                let ret = body;
                if(ret.s > 10000){
                    // error 
                    callback(ret.e,null);
                    return;
                }
                callback(null,ret.d.token);
            } else {
                callback(error, null);
            }
        });
        
    }
}


module.exports = DotEngine;
