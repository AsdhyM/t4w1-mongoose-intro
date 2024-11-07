const { createPost, findManyPosts, findOnePost } = require("./crud/PostCrud");
const { createUser } = require("./crud/UserCrud");
const { dbConnect, dbDisconnect } = require("./database");

require("dotenv").config();

async function seed() {

    let newUSer = await createUser("asdhy", true, "asdhyme@gmail.com");

    await createPost(
        "Example title", 
        [
            {
                languageCode: "en",
                content: "Example content, blah blah"
            },
            {
                languageCode: "fr",
                content: "Omelette au fromage"
            }
        ],
        newUSer.id
    );

    let resultFindOne = await findOnePost(
        {
            title: "Example title", 
            "content.languageCode": "en", 
            "content.content": "Example content blah blah"
        }
    );

    console.log(resultFindOne.title);
    console.log(resultFindOne._id);
    console.log(resultFindOne.id);

    // let resultFindMany = await findManyPosts({title:"Nonexistent title"});
    // console.log(resultFindMany);


    console.log("Seeding is done, disconnecting from the database!");
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
})


