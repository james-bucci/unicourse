// declare const require;

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var _ = require('lodash');

let lessonData : string[] = ['Lesson1', 'Lesson2', 'Lesson3'];

var app = express();
app.use(cors());
app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.route('/lessons')
    .get((req, res) => {
        res.status(200).json(lessonData);
    })
    .post((req, res) => {
        lessonData.push(req.body);
        res.status(200).send();
    })
    .delete((req, res) => {
        lessonData = []; 
        res.status(200).send();
    })
    ;

app.route('/lessons/:id')
    .delete((req, res) => {
        let lesson = req.body;
        console.log('Deleting lesson...', lesson);
        const index = lessonData.indexOf(lesson);
        lessonData.splice(index, 1);
        res.status(200).send();
    })
    ;

var server = app.listen(8080, function() {
    console.log("Server running at localhost:8080");
});

