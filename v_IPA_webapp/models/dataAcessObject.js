const knex = require("knex");
const config = require("../knexfile")
const db = knex(config.development)
db.migrate.latest()


module.exports = {
    postMessage,
    getMessages,
    getMessageById
    
}


async function postMessage(message){
    const addedMessage = await db("messages").insert(message);
    return addedMessage;
}

async function getMessages(){
    const messages = await db("messages").select();
    return messages;

}

async function getMessageById(id){
    const returnedMessageById = await db("messages").select().where("id", id).first();
    return returnedMessageById;

}
