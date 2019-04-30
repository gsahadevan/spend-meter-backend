import express from "express";

import TransactionRouter from "./routes/transactionRouter";
import IndexRouter from "./routes/indexRouter";
import mongoose from "mongoose";

class App {

    public app: express.Application = express();
    
    // routes to the application
    public indexRouter: IndexRouter = new IndexRouter();
    public transactionRouter: TransactionRouter = new TransactionRouter();

    public mongoUrl: string = "mongodb://127.0.0.1:27017/spendmeter";

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
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useFindAndModify: false }, (err: any) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Succesfully Connected!");
            }
        });
    }
}

export default new App().app;