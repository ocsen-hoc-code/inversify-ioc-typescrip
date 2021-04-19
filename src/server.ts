import "reflect-metadata";
import cors from 'cors';
import bodyParse from 'body-parser';
import container from "@src/inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";

const createServer = (hostname: string, port: number, processId: number) => {
    const server = new InversifyExpressServer(container);
    const app = server.build();
    app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
    app.use(bodyParse.json());
    app.get('/test', (_req, res) => {
        res.status(200).json({ processId });
    });
    app.listen(port, hostname, () => {
        console.log(`Server started on port ${port}`);
    });
    // return app;
}

export default createServer;