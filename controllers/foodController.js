const express = require("express");
const router = express.Router();
const food = require("../models/food");

router.get("/", function(req,res){
    res.redirect("/food");
});

router.get("/food", function(req,res){
    food.all(function(foodData){
        res.render("index",{food_data: foodData})
    });
});

// post route -> back to index
router.post("/food/create", function(req,res){
    food.create(req.body.food_name,function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.put("/food/:id",function(req,res){
    food.update(req.params.id, function(result){
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.sendStatus(200);
    });
});

module.exports = router;