
exports.up = function(knex) {
 
  
    return knex.schema.createTable("messages", table => {
      table.increments();
      table.text("message", 256).notNullable()

    }) 
};


  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists("messages")
  };
  