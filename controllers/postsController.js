const posts = require('../data/posts')

function index(req, res) {
    res.send({
        total: posts.length,
        posts
    });
}

function show(req, res) {

    const id = Number(req.params.id); // 3

    const post = posts.find(post => post.id === id); // {} oopure undefined

    if (!post) {
        return res.status(404).send('Post non trovato');
    }

    res.json(post);


}





function store(req, res) {
    // res.send('Creazione nuovo post');
    const newId = posts[posts.length - 1].id + 1;
    // Creiamo un nuovo oggetto post
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags
    }
    // Aggiungiamo la nuova pizza al menu
    posts.push(newPost);


    console.log(posts)

    res.status(201);
    res.json(newPost)
}

function update(req, res) {
    res.send('Modifica integrale del post' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {
    // res.send('Eliminazione del post ' + req.params.id);
    const id = Number(req.params.id);

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).send('Post non trovato');
    }

    // remove post from array
    posts.splice(posts.indexOf(post), 1)

    console.log(posts)

    res.sendStatus(204)


}

module.exports = { index, show, store, update, modify, destroy }
