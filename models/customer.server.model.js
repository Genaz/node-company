/**
 * Created by dev on 2017-02-15.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    customerId: Number,
    firstName: String,
    lastName: String,
    age: Number,
    city: String,
    state: String,
    phone: String
});

module.exports = mongoose.model('Customer', customerSchema);