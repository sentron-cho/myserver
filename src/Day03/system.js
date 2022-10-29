const os = require('os');

const System = {
    info : () => {
        console.log('os.version ==> ' + os.version);
        console.log(os.version())
        console.log('\n');

        console.log('os.arch() ==> ');
        console.log(os.arch())
        console.log('\n');

        console.log('os.freemem() ==> ');
        console.log(os.freemem())
        console.log('\n');

        console.log('os.homedir() ==> ');
        console.log(os.homedir())
        console.log('\n');

        console.log('os.hostname() ==> ');
        console.log(os.hostname())
        console.log('\n');

        console.log('os.totalmem() ==> ');
        console.log(os.totalmem())
        console.log('\n');

        console.log('os.uptime() ==> ');
        console.log(os.uptime())
        console.log(os.uptime() / 60 / 60)
        console.log('\n');

        console.log('os.networkInterfaces() ==> ');
        console.log(os.networkInterfaces())
    }
}

module.exports = System;