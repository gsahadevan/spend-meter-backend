import { Request, Response } from "express";
import Transaction from "../models/transactionModel";

export class TransactionController {

    public getAllTransactions(req: Request, res: Response) {
        Transaction.find(function(err, transactions) {
            res.send(transactions);
        });
   }

    public createTransaction(req: Request, res: Response) {
        let transaction = new Transaction(req.body);
        transaction.save((err: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(transaction);
            }
        });
    }

    public getTransaction(req: Request, res: Response) {
        Transaction.findOne({ _id: req.params.id }, (err: any, transaction: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(transaction);
            }
        });
    }
    
    public updateTransaction(req: Request, res: Response) {
        let req_transaction = new Transaction(req.body)
        Transaction.findOneAndUpdate({ _id: req.params.id }, req_transaction, {new: true},
        (err: any, transaction: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(transaction);
            }
        });
    }
           
    public deleteTransaction(req: Request, res: Response) {
        Transaction.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: "Successfully Deleted Transaction!"});
            }
        });
    }

}

