
const BadRequest = (res, message) => res.status(400).json({ message: message || "Bad Request Recieved"});

const Conflict = (res, message = undefined) => res.status(409).json({ message: message || "Resource Conflict"});

const Unauthorized = (res, message = undefined) => res.status(401).json({ message: message || "Not Authroized"});

const Forbidden = (res, message = undefined) => res.status(403).json({ message: message || "Access forbidden", code: "E403" })

const NotFound = (res, message = undefined) => res.status(404).json({ message: message || "Content Not Found", code: "E404" });



const UnprocessabelEnitity = (res, message = undefined) => res.status(422).json({ message: message || "Unprocessable Entity"});

const JWTExpired = (res) => res.status(401).json({ message: "JWT expired"});


module.exports = { 
    BadRequest,
    Conflict,
    UnprocessabelEnitity,
    Unauthorized,
    Forbidden,
    NotFound,
    JWTExpired
}