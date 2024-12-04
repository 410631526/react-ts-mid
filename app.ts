import express from "express";
import mongoose from "mongoose";
import { UserController } from "./controllers/userController";

const app = express();
const PORT = process.env.PORT || 3000;
const userController = new UserController();

// 設定 MongoDB 連線
mongoose
    .connect("mongodb://localhost:27017/410631526", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB 連線成功"))
    .catch((err) => console.error("MongoDB 連線失敗：", err));

// 定義路由
app.get("/students", (req, res) => userController.test(req, res));

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`伺服器運行中，請訪問：http://localhost:${PORT}`);
});
