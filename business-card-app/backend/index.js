const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors')
const { cardSchema } = require('./types')
const { Card } = require('./db')

app.use(express.json());
app.use(cors());

app.get("/cards", async (req, res) => {
    const cards = await Card.find()
    res.status(200).json({
        cards
    })
})

app.post("/cards", async (req, res) => {
    const payLoad = req.body;
    const checkPayLoad = cardSchema.safeParse(payLoad)
    if (!checkPayLoad.success) {
        res.status(400).json({
            msg: 'invalid inputs'
        })
        return
    }

    const card = await new Card({
        name: payLoad.name,
        description: payLoad.description,
        interests: payLoad.interests,
        links: payLoad.links
    })
    card.save()
    res.status(200).json({
        msg: 'card created'
    });

})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})