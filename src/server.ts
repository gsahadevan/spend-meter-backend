import log4js from "log4js";
import express from "express";
import * as TransactionController from "./controllers/transaction-controller";

const log = log4js.getLogger("server");

const app = express();
app.set("port", process.env.port || 3000);

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));

app.get("/", TransactionController.getAllTransactions);
app.get("/:id", TransactionController.getTransaction);
app.post("/", TransactionController.addTransaction);
app.put("/:id", TransactionController.updateTransaction);
app.delete("/:id", TransactionController.deleteTransaction);


const server = app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
    log.info("App is running on http://localhost:%d", app.get("port"));
});