import { Container } from "inversify";
import TYPES from "@constants/Types";
import LogService from "@services/LogService";
import IlogService from "@interfaces/IlogService";
import { HelloWorldController } from "@controllers/HelloWorldController";

const container = new Container();

container.bind<IlogService>(TYPES.LOG_SERVICE).to(LogService);
container.bind<HelloWorldController>(HelloWorldController).toSelf();

export default container;
