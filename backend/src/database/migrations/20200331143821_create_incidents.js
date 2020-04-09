exports.up = function(knex) { // metodo up responsavel pela criação da tabele 
    return knex.schema.createTable('incidents',function (table){
        table.increments();
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  exports.down = function(knex) { // deleta uma tabela se acontecer algum problema
    return knex.schema.dropTable('incidents');
  };
  