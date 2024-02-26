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


app.listen(3000);