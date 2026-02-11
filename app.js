const express = require('express');
const app = express()
const port = 3000

// importazione router posts

const router = require('./routers/routersPosts');

const notFound = require('./middleWere/notFound');
const errorsHandler = require('./middleWere/errorsHandler');

app.use(express.static('posts'));
// registrazione MiddleWare

// store date import
app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to my blog')
})

// refactor in router file routerPosts
app.use("/posts", router)

app.post("/", (req, res) => {
    console.log(req.body)
});


// use del roiuter posts
app.use(errorsHandler)
// Not found middleware
app.use(notFound)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

