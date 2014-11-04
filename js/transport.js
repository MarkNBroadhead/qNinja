var nodemailer = require('nodemailer');

exports.novell = function(engineer, password) {
    'use strict';
    return nodemailer.createTransport("SMTP", {
        host: "xgate.provo.novell.com",
        secureConnection: false,
        tls: {
            ciphers:'SSLv3'
        },
        port: 25,
        auth: {
            user: engineer,
            pass: password
        }
    });
};

exports.notify = function() {
    'use strict';
    return nodemailer.createTransport("Direct");
};
