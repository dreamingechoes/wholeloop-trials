const assert=require('node:assert/strict');const fs=require('node:fs');assert.equal(fs.readFileSync('status.txt','utf8').replace(/\n$/,''),'public fixture');console.log('status suite PASS');
