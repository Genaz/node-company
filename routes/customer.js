/**
 * Created by dev on 2017-02-15.
 */
var _ = require('lodash');
var Customer = require('../models/customer.server.model.js');

module.exports = function(app) {
    /* Create*/
    app.post('/customer', function (req, res) {
        var newCustomer = new Customer(req.body);

        newCustomer.save(function(err){
            if (err){
                res.json({info: 'error during customer create', error: err});
            };

            res.json({info: 'customer created successfully'});
        });
    });


    //Read

    app.get('/customer', function (req, res) {
        Customer.find(function(err, customers){
            if (err){
                res.json({info: 'error during find customers', error: err});
            };

            res.json({info: 'customers found successfully', data: customers});
        });
    });


    app.get('/customer/:id', function (req, res) {
        console.log(req.params);
        Customer.findById(req.params.id, function(err, customer){
            if (err){
                res.json({info: 'error during find customer', error: err});
            };

            if (customer){
                res.json({info: 'customer found successfully', data: customer});
            }
            else{
                res.json({info: 'customer not found'});
            }

        });
    });

    //Update

    app.put('/customer/:id', function (req, res) {

        Customer.findById(req.params.id, function(err, customer){
            if (err){
                res.json({info: 'error during find customer', error: err});
            };

            if (customer){
                _.merge(customer, req.body);
                customer.save(function(err){
                    if (err){
                        res.json({info: 'error during customer update', error: err});
                    }

                    res.json({info: 'customer updated successfully'});
                })

            }
            else{
                res.json({info: 'customer not found'});
            }

        });
    });

    //Delete
    app.put('/customer/:id', function (req, res) {

        Customer.findByIdAndRemove(req.params.id, function(err, customer){
            if (err){
                res.json({info: 'error during remove customer', error: err});
            };
            res.json({info: 'customer removed successfully'});
        });
    });

}

