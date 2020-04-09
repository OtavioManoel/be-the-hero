exports.up = function(knex) { // metodo up responsavel pela criação da tabele 
    return knex.schema.createTable('ongs',function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
    });
  };
  
  exports.down = function(knex) { // deleta uma tabela se acontecer algum problema
    return knex.schema.dropTable('ongs');
  };
  