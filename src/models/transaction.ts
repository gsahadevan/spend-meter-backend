import { Document, Schema, connect, model } from "mongoose";
import Transaction from "../interfaces/transaction";

const uri: string = "mongodb://127.0.0.1:27017/spendmeter";

connect(uri, { useNewUrlParser: true, useFindAndModify: false }, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected!");
  }
});

interface TransactionModel extends Transaction, Document {}

const TransactionSchema: Schema = new Schema({
    amount: Number,
    merchant: String,
    timestamp: String,
    balance_amount: Number,
    currency: String,
    account: String,
    category: String
}, {
    timestamps: {
     createdAt: true,
     updatedAt: true,
   },
});

export default model<TransactionModel>('transactions', TransactionSchema);
