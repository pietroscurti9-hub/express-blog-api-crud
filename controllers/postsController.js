const posts = require('../data/posts')

function index(req, res) {
    res.send({
        total: posts.length,
        posts
    });
}

function show(req, res) {

    const id = Number(req.params.id);

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).send('Post non trovato');
    }

    res.json(post);

    res.send('Dettagli del post ' + req.params.id);
}





function store(req, res) {
    res.send('Creazione nuovo post');
}

function update(req, res) {
    res.send('Modifica integrale del post' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {
    res.send('Eliminazione del post ' + req.params.id);
}

module.exports = { index, show, store, update, modify, destroy }
