    const jwt = require('jsonwebtoken');
    const createError = require('./errors');

    const verifyToken = (req, res, next) => {
        const token = req.cookies.access_token;
        console.log(token)
        if (!token) {
            return next(createError(401, "You are not authenticated!"));
        }

        jwt.verify(token, "itsasecret", (err, user) => {
            if (err) return next(createError(403, "Token is not valid!"));
            req.user = user;
            next();
        });
    };

    const verifyUser = (req, res, next) => {
        verifyToken(req, res, () => {
            if (req.user.isAdmin === false) {
                next();
            } else {
                return next(createError(403, "You are not authorized!"));
            }
        });
    };

    const verifyAdmin = (req, res, next) => {
        verifyToken(req, res, () => {
            if (req.user.isAdmin) {
                next();
            } else {
                return next(createError(403, "You are not authorized!"));
            }
        });
    };

    module.exports = {
        verifyToken,
        verifyAdmin,
        verifyUser
    }