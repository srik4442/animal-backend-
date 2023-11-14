// backend/controller/petRoute.js

const express = require("express");
const petSchema = require("../model/petSchema");
const petRoute = express.Router();
const mongoose = require("mongoose");

// Create a new pet
petRoute.post("/create-pet", (req, res) => {
    petSchema.create(req.body, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);

    });
});

// Get all pets
petRoute.get("/", (req, res) => {
    petSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);

    });
});

// Get a specific pet by ID
petRoute.route("/get-pet/:id")
    .get((req, res) => {
        petSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if(err)
            return err;
        else
            res.json(data);

        });
    });

// Update a pet by ID
petRoute.route("/update-pet/:id")
    .get((req, res) => {
        petSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if(err)
            return err;
        else
            res.json(data);

        });
    })
    .put((req, res) => {
        petSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
            { $set: req.body },
            (err, data) => {
            if(err)
                return err;
            else
                res.json(data);

            });
    });

// Delete a pet by ID
petRoute.delete("/delete-pet/:id", (req, res) => {
    petSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if(err)
            return err;
        else
            res.json(data);

    });
});

module.exports = petRoute;
