const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){
  //cria a tabela
  db.run(`
  CREATE TABLE IF NOT EXISTS ideas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    title TEXT,
    category TEXT,
    descriptio TEXT,
    link TEXT
  );
`)
  
  // inserir dados na tabela
/*   const query = `
    INSERT INTO ideas(
      image,
      title,
      category,
      descriptio,
      link  
    ) VALUES (?,?,?,?,?);
  `
  const values = [
    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    "Curso de programação 2",
    "Educação",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sunt earum sed",
    "http://rocketseat.com.br"
  ]

  db.run(query, values, function(err){
    if(err) return console.log(err)

    console.log(this)
  }) */ 

  // consultar dados na tabela
/*   db.all(`SELECT * FROM ideas`, function(err, rows){
    if (err) return console.log(err)

    console.log(rows)
  }) */
  
  // deletar um dado da tabela
/*   db.run(`DELETE FROM ideas WHERE id = ?`, [2], function(err){
    if (err) return console.log(err)

    console.log("Deletado", this)
  }) */
})

module.exports = db