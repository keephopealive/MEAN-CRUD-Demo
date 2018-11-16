const path = require('path');

// ============ Express ============ 
const express = require('express');
const app = express();

// ============ Body Parser ============ 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ============ Static Routes ============ 
app.use(express.static(path.join(__dirname, "angular-app/dist/angular-app")));

// ============ Mongoose ============ 
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/widgets_db")

const WidgetSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "Title must exist."]
    },
    description: { 
        type: String, 
        required: [true, "Description must exist."]
    },
    price: { 
        type: Number, 
        required: [true, "Price must exist."]
    },

}, { timestamps: true });
const Widget = mongoose.model('Widget', WidgetSchema);


// ============ Routes ============ 
app.get('/widgets', function (req, res) {
    console.log("SERVER > GET /widgets");
    Widget.find( {}, (err, widgets) => {
        res.json(widgets);
    });

})

app.post("/widgets", function(req, res) {
    console.log("SERVER > POST /widgets, req.body: ", req.body);
    Widget.create(req.body, (err, result) => {
        if (err) {
            res.json({
                status: false,
                err: err
            });
        }
        else {
            res.json({
                status: true,
                result: result
            });
        }
    })
})

app.delete("/widgets/:id", function(req, res){
    console.log("SERVER > DELETE /widgets/:id, req.params.id: ", req.params.id);
    Widget.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) { console.log(err) }
        else {
            res.json(true);
        }
    })
})

app.put("/widgets/:id", function(req, res) {
    console.log("SERVER > PUT /widgets/:id", "req.params.id:" , req.params.id, "req.body", req.body);
    Widget.update({_id: req.params.id}, req.body, (err, result) => {
        if (err) { console.log(err) }
        else {
            console.log("SERVER >  PUT /widgets/:id, Widget.update, result: ", result);
            res.json(true);
        }
    })
})

// ============ Server ============ 
app.listen(8001);