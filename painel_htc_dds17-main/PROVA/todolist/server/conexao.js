import mysql from "mysql2/promise";

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'todolist',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default conexao;