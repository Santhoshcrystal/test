
const Success = (res, message = undefined, data = undefined) => res.status(200).json({ message: message || "Request Success", data });

const Created = (res, message = undefined, data = undefined) => res.status(201).json({ message: message || "Resource Created", data });


module.exports = {
    Success,
    Created,
}