'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Mail Templates Schema
 */
var TemplateSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    body: {
        type: String
    },
    toAddress: String,
    ccAddress: String,
    updated: {
        type: Array
    }
});

module.exports = mongoose.model('MailTemplate', TemplateSchema);

