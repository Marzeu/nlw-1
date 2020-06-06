const sqlite3 = require("sqlite3")
    .verbose();

const db = new sqlite3.Database("./src/database/database.db");

// db.serialize(function () {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//             );
//     `);

//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `;

//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ];

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err);
//         };
//         console.log("Cadastrado com sucesso");
//         console.log(this);
//     };

//     db.run(query, values, afterInsertData);
    
//     // db.all(`SELECT * FROM places`, function (err, rows) {
//     //     if (err) {
//     //         return console.log(err);
//     //     };
//     //     console.log("Aqui estão os seus dados");
//     //     console.log(rows);
//     // });

//     // db.run(`DELETE FROM places WHERE id=?`, [2], function (err) {
//     //     if (err) {
//     //         return console.log(err);
//     //     };

//     //     console.log("Dado deletado com sucesso!");
//     // });

// });
