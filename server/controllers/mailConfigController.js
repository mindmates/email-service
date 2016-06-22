/**
 * Created by kishore on 12/28/15.
 */
var mongoose = require('mongoose'),
    MailConfig = mongoose.model('MailConfig');
module.exports = function (config) {
    return {

        fetchMailConfigs: function (req, res) {
            MailConfig.find({}).limit(100).exec(function (err, docs) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot fetch the mailConfigs'
                    });
                }
                return res.json(docs);
            });
        },
        findMailConfig: function (req, res) {
            MailConfig.findOne({"_id": req.params.id}).exec(function (err, mailConfig) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot fetch the mailConfig'
                    });
                }
                return res.json(mailConfig);
            });
        },
        saveMailConfig: function (req, res) {
            var mailConfig = new MailConfig(req.body);
                    mailConfig.save(function (error) {
                        if (error) {
                            return res.status(500).json({
                                error: 'Cannot save the mailConfig'
                            });
                        }
                        return res.json(mailConfig);
                    });


        },
        updateMailConfig: function (req, res) {
            MailConfig.update({'_id': req.body['_id']}, {$set: req.body}, function (err, page) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the Time sheet'
                    });
                }
                res.json(req.body);
            });
        },
        deleteMailConfig: function (req, res) {
            MailConfig.find({"_id": req.params.mailConfigId}).remove(function (err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot delete the mailConfig'
                    });
                }
                return res.status(200).json({
                    "data": "MailConfig deleted successfully"
                });
            });
        }
    };
};