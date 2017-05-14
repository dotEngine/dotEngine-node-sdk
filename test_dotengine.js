#!/usr/bin/env node

'use strict';

const DotEngine = require('./dotengine');


let dotEngine = new DotEngine('dotcc','dotcc');

dotEngine.createToken({room:'room',user:'user'},(error,token) => {

    console.log('error ', error);
    console.log('token ', token);
});

setTimeout(() => {},3000);



