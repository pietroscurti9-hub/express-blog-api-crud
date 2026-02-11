function notFound (req, res, next) {
    res.status(404)
    res.json({
        error: "Error 404 file not Found",
        message: "Pagina non trovata",
       
    });
};

module.exports = notFound;