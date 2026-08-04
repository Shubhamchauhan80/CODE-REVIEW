const aiServices = require("../services/ai.service")


module.exports.getReview = async (req, res) => {

    const code = req.body.code;

    if(!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiServices(code);


    res.send(response);
}