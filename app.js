const express = require('express');
const app = express()
const port = 3000

// importazione router posts

const router = require('./routers/routersPosts');

app.use(express.static('posts'));

// store date import
app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to my blog')
})

// refactor in router file routerPosts
app.use("/posts", router)

// use del roiuter posts

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.post("/", (req, res) => {
    console.log(req.body)
});