const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());//proteção 
app.use(express.json()); // Avisa que eu vou usar o json para enviar requisções, tem que ficar em primeiro no codigo
app.use(routes);

app.listen(3333);


/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Busca uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route params: Parâmetros utilizados para identificar recursos 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELCT * FROM user
     * Query Builder:
     */

