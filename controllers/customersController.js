const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Customers
            .find(req.query)
            .then(dbCustomers => res.json(dbCustomers))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Customers
        .create(req.body)
        .then(dbCustomers => res.json(dbCustomers))
        .catch(err => res.status(422).json(err));
    },
    
    findById: function(req, res) {
        db.Customers
            .findById(req.params.id)
            .then(dbCustomers => res.json(dbCustomers))
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Customers
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbCustomers => res.json(dbCustomers))
            .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.Customers
            .findById({ _id: req.params.id })
            .then(dbCustomers => dbCustomers.remove())
            .then(dbCustomers => res.json(dbCustomers))
            .catch(err => res.status(422).json(err));
    }



};