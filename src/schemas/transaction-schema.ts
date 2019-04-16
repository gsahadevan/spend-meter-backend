import mongoose from "mongoose";
import ITransaction from "../models/transaction";

const uri: string = "mongodb://127.0.0.1:27017/spendmeter";

mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected!");
  }
});

interface ITransactionModel extends ITransaction, mongoose.Document {}

const TransactionSchema = new mongoose.Schema({
    amount: Number,
    merchant: String,
    timestamp: String,
    balance_amount: Number,
    currency: String,
    account: String
});

const Transaction = mongoose.model<ITransactionModel>('transactions', TransactionSchema);

export default Transaction;