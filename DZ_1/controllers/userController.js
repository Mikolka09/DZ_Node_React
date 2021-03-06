//Подключить нужную модель
const model = require("../models/user")

//Creat => POST
exports.post = function (req, res){
    console.log("POST Start");
    const element =new model(req.body);
    element.save(function (err){
        if(err){console.log(err); return err;}
        return res.json(element);
    });
};

//Read => GET
exports.get = function (req, res){
    console.log("Get start!");
    model.find({},
        function (err, data){
            if(err){console.log(err); return err;}
            res.json(data);
        });
};

// Update => PUT
exports.put = function (req, res) {
    console.log ("PUT start");
    const element = new model (req.body);
    model.findByIdAndUpdate(
        req.body._id,
        element,
        {}, // new:true - создаст новый если не нашел по ID
        function (err, result) {
            if (err) {console.log(err); res.send(err);}
            res.send(result);
        }
    );
}

// Delete = >DELETE
exports.delete = function (req, res) {
    model.findByIdAndDelete(
        req.body._id,
        {},
        function (err) {
            if (err) res.send(err);
            res.sendStatus(200);
        }
    );
}