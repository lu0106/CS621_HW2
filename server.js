// reference https://github.com/semmypurewal/LearningWebAppDev/tree/master/Chapter6 

var express = require("express"),
    http = require("http"),
    app = express(),
    toDos = [
        { 
            "description" : "CS621",
            "tags"  : [ "Monday", "Tuseday" ]
        },
        { 
            "description" : "Lab",
            "tags"  : [ "Wednesday", "Thursday" ]
        },
        {
            "description" : "Party",
            "tags"  : [ "Friday", "Saturday" ]
        },
        { 
            "description" : "Relax",
            "tags"  : [ "Sunday" ]
        },
        { 
            "description" : "Homeork",
            "tags"  : [ "Sunday", "Saturday" ]
        },
        { 
            "description" : "Shopping",
            "tags"  : [ "Wednesday", "Friday" ]
        }
    ]
        
app.use(express.static(__dirname + "/client"));

app.use(express.urlencoded());

http.createServer(app).listen(3000);

app.get("/todos.json", function (req, res) {
    res.json(toDos);
});

app.post("/todos", function (req, res) {
    var newToDo = req.body;

    console.log(newToDo);

    toDos.push(newToDo);

    res.json({"message":"You posted to the server!"});
});
