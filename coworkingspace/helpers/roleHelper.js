const { Unauthorized, Forbidden } = require("./Response/ClientErrors");

const isAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
        return next();
    }
    return Unauthorized("Don't have access", res);
}

const isUser = (req, res, next) => {
    if (req.user.type == "user") return next();
    return Forbidden(res, "You are not allowed to access this part of the page!");
}


module.exports = {
    isAdmin,
    isUser
}