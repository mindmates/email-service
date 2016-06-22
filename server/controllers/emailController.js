/**
 * Created by kishore on 12/28/15.
 */
var mongoose = require('mongoose'),
    MailTemplate = mongoose.model('MailTemplate'),
    MailConfig = mongoose.model('MailConfig'),
    MailAccount = mongoose.model('MailAccount');
var nodemailer = require('nodemailer');
module.exports = function (config) {
    return {
        sendEmail: function (req, res) {
            MailAccount.findOne({email: req.body.from}).exec(function (err, account) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot fetch the mailConfig'
                    });
                } else {
                    MailConfig.findOne({serverType: account.serverType}).exec(function (error, mailConfig) {
                        if (error) {
                            return res.status(500).json({
                                error: 'Cannot fetch the mailConfig'
                            });
                        } else {
                            sendUsingMailer(req, res, account, mailConfig);
                        }
                    });
                }
            });

        },


    };
};

// Private methods

function sendUsingMailer(req, res, account, mailconfig) {
    var smtpConfig = {
        host: mailconfig.host,
        port: mailconfig.port,
        auth: {
            user: account.email,
            pass: account.password
        }
    };
    if(mailconfig.isSSL){
        smtpConfig.secure = true;
    }
    var transporter = nodemailer.createTransport(smtpConfig);

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from:  account.name + ' <'+account.email+'>', // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        html: req.body.html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.status(500).json({
                error: 'Cannot send email'
            });
        }
        return res.status(200).json(info);

    });
}