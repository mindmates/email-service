'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Account Schema
 */
var AccountSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    },
    serverType: String,
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    updated: {
        type: Array
    }
});

module.exports = mongoose.model('MailAccount', AccountSchema);

