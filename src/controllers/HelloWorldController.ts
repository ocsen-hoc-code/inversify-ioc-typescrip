import IlogService from "@interfaces/IlogService";
import { inject } from "inversify";
import { httpGet, controller } from 'inversify-express-utils';
import TYPES from "@constants/types";

@controller('/')
export class HelloWorldController {
  private logServ: IlogService;
  public constructor(@inject(TYPES.LOG_SERVICE) logServ: IlogService) {
    this.logServ = logServ;
  }

  @httpGet('/')
  public hello(): string {
    return this.logServ.showLog("Hello Typescript");
  }
}
