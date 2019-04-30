import { TransactionController } from "../controllers/transactionController";
import { Router } from "express";

class TransactionRouter {

    public router = Router();
    public transactionController: TransactionController = new TransactionController();

    constructor() {
        this.init();
    }

    private init(): void {
        this.router.route("/:id")
            .get(this.transactionController.getTransaction)
            .put(this.transactionController.updateTransaction)
            .delete(this.transactionController.deleteTransaction);

        this.router.route("/")
            .get(this.transactionController.getAllTransactions)
            .post(this.transactionController.createTransaction);
    }
}

export default TransactionRouter;