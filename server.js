//const express = require('express')
//const app = express()

//app.get('/', (req, res) => res.send('Hello World!'))
//app.listen(3000, () => console.log('Server ready'))

'use strict';
const express = require("express");

const app = express();
const port = 3000;
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

/**
 * Establishes a database connection to the database and returns the database object.
 * Any errors that occur should be caught in the function that calls this one.
 * @returns {sqlite3.Database} - The database object for the connection.
 */
async function getDBConnection() {
  const db = await sqlite.open({
    filename: "./Chinook_Sqlite.sqlite",
    driver: sqlite3.Database,
  });

  return db;
}

app.get("/public/invoice", async (req, res) => {
  res.send("Hello, World!");
  let db = await getDBConnection();
  const sqlString = "SELECT * FROM Invoice";
  let rows = await db.all(sqlString);
  console.log(rows);
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});