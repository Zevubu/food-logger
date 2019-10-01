const orm = require("../config/orm");

let food = {
    all: function(cb){
        orm.all("food", function(res){
            cb(res);
        });
    },
    create: function(name,cb){
        orm.create("food",["food_name", "devoured"], [name,false], cb);
    },
    update: function(id,cb){
        let condition = `id=${id}`;
        orm.update("food",{devoured:true}, condition, cb);
    }
};

module.exports = food;