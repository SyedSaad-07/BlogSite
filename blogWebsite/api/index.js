import express  from "express";
import { db } from "./db.js";
import cors from "cors";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);


db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255),img VARCHAR(255))";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    var sql = "CREATE TABLE IF NOT EXISTS posts (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description VARCHAR(1000),img VARCHAR(255),date DATETIME, uid INT, FOREIGN KEY (uid) REFERENCES users(id))";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});
 

app.listen(8800, ()=>{
    // console.log("Connected! ");
})