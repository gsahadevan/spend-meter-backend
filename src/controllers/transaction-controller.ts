import { Request, Response } from "express";
import Transaction from "../schemas/transaction-schema";

export let getAllTransactions = (req: Request, res: Response) => {
  let transactions = Transaction.find((err: any, transactions: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(transactions);
    }
  });
};

export let getTransaction = (req: Request, res: Response) => {
  let transaction = Transaction.findById(req.params.id, (err: any, transaction: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(transaction);
    }
  });
};

export let deleteTransaction = (req: Request, res: Response) => {
  let transaction = Transaction.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Succesfully Deleted Transaction");
    }
  });
};

export let updateTransaction = (req: Request, res: Response) => {
    var req_transaction = new Transaction(req.body);
  let transaction = Transaction.findByIdAndUpdate(req.params.id, req_transaction,
    (err: any, transaction: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Succesfully Updated Transaction!");
      }
    });
};

export let addTransaction = (req: Request, res: Response) => {
  var transaction = new Transaction(req.body);

  /*
  var transaction = new Transaction();
  transaction.amount = 33;
  transaction.merchant = "SRI MADHURAM SWEETS";
  transaction.timestamp = "09-JUL-18 09:07 AM";
  transaction.balance_amount = 6747.88;
  transaction.currency = "INR";
  transaction.account = "HDFC FOODPLUS CARD XXXX7685";
  */
  transaction.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(transaction);
    }
  });
};