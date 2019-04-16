import log4js from "log4js";
import express from "express";

import routes from "./routes/index";
import transaction from "./routes/transaction";

const log = log4js.getLogger("server");

const app = express();
app.set("port", process.env.port || 3000);

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));

app.use("/", routes);
app.use("/transaction", transaction);

const server = app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
    log.info("App is running on http://localhost:%d", app.get("port"));
});