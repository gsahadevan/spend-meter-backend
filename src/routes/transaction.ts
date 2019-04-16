import { Request, Response } from "express";
import express from "express";
import Transaction from "../schemas/transaction-schema";

const router = express.Router();

router.get("/", function(req, res) {
    Transaction.find(function(err, resp) {
        res.send(resp);
    });
});

router.post("/", (req: Request, res: Response) => {
    var transaction = new Transaction(req.body);
    transaction.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(transaction);
        }
    });
});

router.get("/:id", function(req, res) {
    Transaction.findById(req.params.id, function(err, resp) {
        if (err) {
            res.send(err);
        } else {
            res.send(resp);
        }
    });
});

router.put("/:id", (req: Request, res: Response) => {
    var req_transaction = new Transaction(req.body);
    Transaction.findByIdAndUpdate(req.params.id, req_transaction,
        (err: any, transaction: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Successfully Updated Transaction!");
            }
        });
});

router.delete("/:id", (req: Request, res: Response) => {
    Transaction.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Successfully Deleted Transaction!");
        }
    });
});


export default router;
