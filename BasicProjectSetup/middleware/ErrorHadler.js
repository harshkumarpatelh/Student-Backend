
// custome error handling class
class AppError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

const ErrorHandler = (err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        message: errMsg,
        status: errStatus,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    })
}

module.exports = {
    AppError,
    ErrorHandler
};