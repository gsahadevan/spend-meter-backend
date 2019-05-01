import express from "express";

import TransactionRouter from "./routes/transactionRouter";
import IndexRouter from "./routes/indexRouter";
import mongoose from "mongoose";

class App {

    public app: express.Application = express();
    
    // routes to the application
    public indexRouter: IndexRouter = new IndexRouter();
    public transactionRouter: TransactionRouter = new TransactionRouter();

    public configuration: any = require("../config/config.json")[process.env.NODE_ENV || 'development'];

    constructor() {
        this.config();
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(express.json());
        this.app.set("port", process.env.port || 3000);
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        // for serving static files
        this.app.use(express.static('public'));

        // configuring the routes
        this.app.use("/", this.indexRouter.router);
        this.app.use("/transaction", this.transactionRouter.router);
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.configuration.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false }, (err: any) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Succesfully Connected to Mongo DB Instance!");
            }
        });
    }
}

export default new App().app;