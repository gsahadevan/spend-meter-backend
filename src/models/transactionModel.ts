import { Document, Schema, model } from "mongoose";
import Transaction from "../interfaces/transaction";

interface TransactionModel extends Transaction, Document {}

const TransactionSchema = new Schema({
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