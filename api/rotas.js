const express = require("express");
const router = express.Router();
const app = express();


app.use(express.json());


const user = [];

router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "valida",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
})

router.post("/user", (req, res) => {

}); 

module.exports = router;