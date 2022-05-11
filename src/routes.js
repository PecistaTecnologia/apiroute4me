const express = require("express");
const app = express();



app.use(express.json());

const users = [];

    app.get("/", (req, res) => {
         try {
            res.json({"Api": "Pecista/Kaizen", "Version": "1.0"});
        } catch (error) {
            console.error(error);
        return res.status(500).send("Server error");
        }
    })

app.post("/user",  (req, res) => {

        const event = req.body;

        if( event.activity_type != "route-optimized") {
            res.status(404).json({
                error: true,
                message: "request failed"
            });
        } else {
            res.status(200).json({
                error: false,
                message: "request validation"
            });
        }
    const { route_id } = req.body; //activity_type

    user.create({
        route_id: route_id
        //activity_type
    });

    users.push(user);
    //console.log(user)


    return res.status(201).json({error: false, message: "Resiquição via POST"});
}); 

module.exports = app;