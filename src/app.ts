import "reflect-metadata";
import cors from 'cors';
import bodyParse from 'body-parser';
import container from "@src/inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";

const server = new InversifyExpressServer(container);

const app = server.build();
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(bodyParse.json());

export default app;