const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.send("🚀 Backend API Running");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
