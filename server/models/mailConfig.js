'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * User Schema
 */
var MailConfigSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    serverType: String,
    host: {
        type: String
    },
    port: {
        type: String
    },
    isSSL: {
        type: Boolean
    },
    isTLS: {
        type: Boolean
    },
    updated: {
        type: Array
    }
});

module.exports = mongoose.model('MailConfig', MailConfigSchema);