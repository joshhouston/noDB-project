const express = require("express");
const tweakWishlist = require("./controllers/tweakWishlist");
const app = express();

app.use(express.json());

app.get("/api/tweakWishlist", tweakWishlist.getWishlist)



const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => {
    console.log(`its a party on ${SERVER_PORT}`)
})