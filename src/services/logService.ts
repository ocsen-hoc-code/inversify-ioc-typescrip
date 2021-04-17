// import IlogService from "@interfaces/IlogService";

import IlogService from "@interfaces/IlogService";
import { injectable } from "inversify";

@injectable()
export default class LogService implements IlogService {
  showLog(msg: string): string {
    console.log("Message:", msg);
    return msg;
  }
}
