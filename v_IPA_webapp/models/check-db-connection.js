const knex = require("knex");
const config = require("../knexfile")
const db = knex(config.development)



db.raw('select 1+1 as result').catch(err => {
    console.log("Could not establish connection to Database")
    console.log(err);
});

module.exports