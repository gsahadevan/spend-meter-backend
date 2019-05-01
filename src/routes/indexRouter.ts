import { Router } from "express";
//import swaggerUi from "swagger-ui-express";
//import swaggerDocument from "../../config/swagger.json";

class IndexRouter {

    public router = Router();

    constructor() {
        this.init();
    }

    private init(): void {
        this.router.get("/", (req: any, res: any) => {
            res.send("spend-meter-backend service");
        });

        //this.router.get("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }
}

export default IndexRouter;