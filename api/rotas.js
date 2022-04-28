const express = require("express");
const router = express.Router();
const app = express();


app.use(express.json());


const user = [];

router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: ["Api", "Pecista/Kaizen", "Version 1.0"],
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
})

router.post("/user", async (req, res) => {
    try{
        //await user.create(dados);
    console.log(req.body)
    } catch  (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
}); 

module.exports = router;