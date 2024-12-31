import { Express, Request, Response } from "express";
import router from "../modules/sampleModule/routes/sampleRouter";
import path from "path";

const routerSetup = (app: Express, express: any) => {
    app.use("/api", router);

    app.use(
        "/",
        express.static(path.join(__dirname, "../../../frontend/dist"))
    );

    app.get("/*", function (req, res) {
        res.sendFile(
            path.join(__dirname, "../../../frontend/dist", "index.html")
        );
    });
};

export default routerSetup;
