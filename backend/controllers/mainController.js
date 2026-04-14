exports.getData = (req, res) => {
    res.json({
        message: "🔥 Backend working perfectly",
        status: "success",
        data: {
            system: "SOC AI Scanner",
            time: new Date()
        }
    });
};
