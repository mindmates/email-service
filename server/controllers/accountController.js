/**
 * Created by kishore on 12/28/15.
 */
var mongoose = require('mongoose'),
    MailAccount = mongoose.model('MailAccount');
module.exports = function (config) {

    return {

        fetchAccounts: function (req, res) {
            MailAccount.find({}).limit(100).exec(function (err, docs) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot fetch the accounts'
                    });
                }
                return res.json(docs);
            });
        },
        findAccount: function (req, res) {
            MailAccount.findOne({"_id": req.params.id}).exec(function (err, account) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot fetch the account'
                    });
                }
                return res.json(account);
            });
        },
        saveAccount: function (req, res) {
            var account = new MailAccount(req.body);
            account.save(function (error) {
                if (error) {
                    return res.status(500).json({
                        error: 'Cannot save the account'
                    });
                }
                return res.json(account);
            });
        },
        updateAccount: function (req, res) {
            MailAccount.update({'_id': req.body['_id']}, {$set: req.body}, function (err, page) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the Time sheet'
                    });
                }
                res.json(req.body);
            });
        },
        deleteAccount: function (req, res) {
            MailAccount.find({"_id": req.params.accountId}).remove(function (err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot delete the account'
                    });
                }
                return res.status(200).json({
                    "data": "MailAccount deleted successfully"
                });
            });
        }
    };
};