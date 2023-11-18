exports.books_get_all = (req, res, next) => {
    Book.find()
        .then((result) => {
            res.status(200).json({
                wiadomosc: 'Lista wszystkich książek',
                info: result,
            });
        })
        .catch((err) => res.status(500).json(err));
};

exports.books_add_new = (req, res, next) => {
    const book = new Book({
        author: req.body.author,
        title: req.body.title,
        price: req.body.price,
    });
    book
        .save()
        .then((result) => {
            res.status(201).json({
                wiadomosc: 'Dodanie nowej książki',
                info: result,
            });
        })
        .catch((err) => res.status(500).json(err));
};

exports.books_get_by_id = (req, res, next) => {
    const id = req.params.bookId;
    Book.findById(id)
        .then((result) => {
            res.status(200).json({
                wiadomosc: 'Szczegóły książki o numerze ' + id,
                info: result,
            });
        })
        .catch((err) => res.status(500).json(err));
};

exports.books_change = (req, res, next) => {
    const id = req.params.bookId;
    const book = {
        author: req.body.author,
        title: req.body.title,
        price: req.body.price,
    };
    Book.findByIdAndUpdate(id, book)
        .then(() => {
            res
                .status(200)
                .json({ wiadomosc: 'Zmieniono dane książki o numerze ' + id });
        })
        .catch((err) => res.status(500).json(err));
};

exports.book_delete = (req, res, next) => {
    const id = req.params.bookId;
    Book.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ wiadomosc: 'Usunięto książkę o numerze ' + id });
        })
        .catch((err) => res.status(500).json(err));
};
