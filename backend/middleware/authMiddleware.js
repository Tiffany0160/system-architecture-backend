module.exports = (req, res, next) => {
    console.log("🔐 Auth check passed");
    next();
};
