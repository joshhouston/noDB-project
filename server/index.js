const express = require("express");
const tweakWishlist = require("./controllers/tweakWishlist");
const currentTweaks = require("./controllers/currentTweaks")
const app = express();

app.use(express.json());

app.get("/api/currentTweaks", currentTweaks.getCurrentTweaks)
app.delete("/api/currentTweaks/:name", currentTweaks.deleteTweak )

app.get("/api/tweakWishlist", tweakWishlist.getWishlist)
app.post("/api/tweakWishlist", tweakWishlist.addWish)
app.put("/api/tweakWishlist", tweakWishlist.editWishlist)



const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => {
    console.log(`its a party on ${SERVER_PORT}`)
})