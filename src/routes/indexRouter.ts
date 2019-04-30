import { Router } from "express";

class IndexRouter {

    public router = Router();

    constructor() {
        this.init();
    }

    private init(): void {
        this.router.get("/", (req: any, res: any) => {
            res.send("spend-meter-backend service");
        })
    }
}

export default IndexRouter;