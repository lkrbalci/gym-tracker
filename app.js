const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user-routes")

const app = express();

app.use("/api/users", userRoutes)




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});