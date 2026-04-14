const connectDB = async () => {
    try {
        console.log("📦 MongoDB Connected (mock - add real URI later)");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
