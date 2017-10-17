const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

// Serve up static assets.
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every requrest to the React app

// Define API routes before

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on Port ${PORT}!`)
});