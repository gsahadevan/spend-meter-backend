import { Request, Response, Router } from "express";
import Transaction from "../models/transaction";

const router = Router();

router.get("/haha", (req: Request, res: Response) => {
    Transaction.aggregate([
        { $group: {
            _id: "$merchant",
            count: { $sum: 1 }
        }}, { $sort: { count: -1}}
    ], function (err: any, result: any) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        res.send(result);
    });
});

router.get("/hehe", (req: Request, res: Response) => {
    Transaction.aggregate([
        { $group: {
            _id: "$account",
            sum: { $sum: "$amount" }
        }}, { $sort: { count: -1}}
    ], function (err: any, result: any) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        res.send(result);
    });
});

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

router.get("/:id", function(req: any, res: any) {
    Transaction.findById(req.params.id, function(err: any, resp: any) {
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
