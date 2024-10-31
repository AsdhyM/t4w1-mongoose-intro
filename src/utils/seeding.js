const { createPost } = require("./crud/PostCrud");
const { dbConnect, dbDisconnect } = require("./database");

async function seed() {

    await createPost("Example title", "Example content");





    console.log("Seeding is done, disconnecting from the database!")
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
})


