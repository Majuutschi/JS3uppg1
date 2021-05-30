const { request } = require('express');
const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(500).json(error))
}

exports.getAProduct = (req, res) => {
    Product.exists( { _id: req.params.id }, (err, result) => {
        if(err) {
            return res.status(400).json(err)
        }
        else {
            if(result) {
                Product.findById(req.params.id)
                    .then(product => res.status(200).json(product))
                    .catch(err => res.status(500).json(err))
            }
            else {
                return res.status(404).json({
                    statusCode: 404,
                    status: false, 
                    message: 'Produkten finns inte'
                })
            }
        }
    })
}

exports.createProduct = (req, res) => {
    Product.exists({ name: req.body.name }, (err, result) => {
        if(err) {
            return res.status(500).json(err)
        } else {
            if(result) {
                return res.status(400).json({
                    statusCode: 400,
                    status: false, 
                    message: 'Produkten finns redan'
                })
            }

            const newProduct = new Product({

                name: req.body.name,
                desc: req.body.desc,
                price: req.body.price,
                image: req.body.image
            })

            newProduct.save()
                .then(() => {
                    res.status(201).json({
                        statusCode: 201,
                        status: true,
                        message: 'Produkt skapad'
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        statusCode: 500,
                        status: false,
                        message: 'Misslyckades med att skapa produkten',
                        err
                    })
                })
                
        }
    })
}

exports.updateProduct = (req, res) => {
    Product.exists({ _id: req.params.id }, (err, result) => {
        if(err) {
            return res.status(500).json(err)
        }
        else {
            if(result) {
                Product.updateOne({ _id: req.params.id }, {
                    ...req.body,
                    modified: Date.now()
                })
                .then(() => {
                    res.status(200).json({
                        statusCode: 200,
                        status: true,
                        message: 'Produkten uppdaterades'
                    })
                })
                .catch(() => {
                    res.status(500).json({
                        statusCode: 500,
                        status: false,
                        message: 'Misslyckades med att uppdatera produkten'
                    })
                })
                    
            }
            else {
                return res.status(404).json({
                    statusCode: 404,
                    status: false, 
                    message: 'Produkten finns inte'
                })
            }
        }
    })
}

exports.deleteProduct = (req, res) => {
    Product.exists({ _id: req.params.id }, (err, result) => {
        if(err) {
            return res.status(400).json(err)
        }
        else {
            if(result) {
                Product.deleteOne({ _id: req.params.id })
                    .then(() => {
                        res.status(200).json({
                            statusCode: 200,
                            status: true, 
                            message: 'Produkten är raderad'
                        })
                    })
                    .catch(() => {
                        res.status(500).json({
                            statusCode: 500,
                            status: false, 
                            message: 'Misslyckades med att radera produkten'
                        })
                    })
            }
            else {
                return res.status(404).json({
                    statusCode: 404,
                    status: false, 
                    message: 'Produkten finns inte'
                })
            }
        }
    })
}