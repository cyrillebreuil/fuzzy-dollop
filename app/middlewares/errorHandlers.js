const notFound = (req, res, next) => {
    const error = new Error('Not Found');
    error.statusCode = 404;

    next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    //console.log(err);

    res.status(statusCode).json({ error: err.message });
};

export { notFound, errorHandler };