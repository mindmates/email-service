/**
 * Created by kishore on 12/28/15.
 */
var mongoose = require('mongoose'),
    MailTemplate = mongoose.model('MailTemplate');
module.exports = function (config) {
    return {

        fetchTemplates: function (req, res) {
            MailTemplate.find({}).limit(100).exec(function (err, docs) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot fetch the mailTemplates'
                    });
                }
                return res.json(docs);
            });
        },
        findTemplate: function (req, res) {
            MailTemplate.findOne({"_id": req.params.id}).exec(function (err, mailTemplate) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot fetch the mailTemplate'
                    });
                }
                return res.json(mailTemplate);
            });
        },
        saveTemplate: function (req, res) {
            var mailTemplate = new MailTemplate(req.body);
            mailTemplate.save(function (error) {
                if (error) {
                    return res.status(500).json({
                        error: 'Cannot save the mailTemplate'
                    });
                }
                return res.json(mailTemplate);
            });


        },
        updateTemplate: function (req, res) {
            MailTemplate.update({'_id': req.body['_id']}, {$set: req.body}, function (err, page) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the Time sheet'
                    });
                }
                res.json(req.body);
            });
        },
        deleteTemplate: function (req, res) {
            MailTemplate.find({"_id": req.params.mailTemplateId}).remove(function (err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot delete the mailTemplate'
                    });
                }
                return res.status(200).json({
                    "data": "MailTemplate deleted successfully"
                });
            });
        }
    };
};