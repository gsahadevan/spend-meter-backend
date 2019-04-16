import { Request, Response } from "express";
import Transaction from "../schemas/transaction-schema";

export let getAllTransactions = (req: Request, res: Response) => {
  //res.send("Returns all Books");
  //console.log("getAllTransactions called");
  let transactions = Transaction.find((err: any, transactions: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(transactions);
    }
  });
};

export let getTransaction = (req: Request, res: Response) => {
  //res.send("Returns one book");
  console.log(req.params.id);
  let transaction = Transaction.findById(req.params.id, (err: any, transaction: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(transaction);
    }
  });
};

export let deleteTransaction = (req: Request, res: Response) => {
  res.send("Returns one book");
};

export let updateTransaction = (req: Request, res: Response) => {
  res.send("Returns one book");
};

export let addTransaction = (req: Request, res: Response) => {
  // res.send("Returns one book");
  // var transaction = new Transaction(req.body);

  var transaction = new Transaction();
  transaction.amount = 33;
  transaction.merchant = "SRI MADHURAM SWEETS";
  transaction.timestamp = "09-JUL-18 09:07 AM";
  transaction.balance_amount = 6747.88;
  transaction.currency = "INR";
  transaction.account = "HDFC FOODPLUS CARD XXXX7685";

  transaction.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(transaction);
    }
  });
};