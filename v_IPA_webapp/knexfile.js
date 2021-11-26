// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'vipaserver.mysql.database.azure.com', 
      port : 3306,
      user : 'scmi@vipaserver',
      password : process.env.DBPW,
      database : 'vipa_webapp'
    }
  },





};




//host.docker.internal