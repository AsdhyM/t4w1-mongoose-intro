const { createPost, findManyPosts, findOnePost } = require("./crud/PostCrud");
const { dbConnect, dbDisconnect } = require("./database");

require("dotenv").config();

async function seed() {

    await createPost("Example title", "Example content");

    let resultFindOne = await findOnePost({title: "Example title", content: "Example content"});

    console.log(resultFindOne.title);
    console.log(resultFindOne._id);
    console.log(resultFindOne.id);

    // let resultFindMany = await findManyPosts({title:"Nonexistent title"});
    // console.log(resultFindMany);


    console.log("Seeding is done, disconnecting from the database!")
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
})


