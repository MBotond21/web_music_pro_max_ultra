import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import cors from "cors";

let app = express();
let jsonParser = bodyParser.json();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'data_to_sell',
}).promise();

app.use(cors());

app.get('/data/:Id', async (req,res)=>{
    let Id = parseInt(req.params.Id);
    const [rows, fields] = await db.query('SELECT * FROM data WHERE id = ?', [Id]);
    if (rows.length == 1){
        res.send(rows[0]);
    } else {
        res.status(404).send({error: 'Hiba történt!'});
    }
});

app.listen(3000);