import IlogService from "@interfaces/IlogService";
import { inject } from "inversify";
import { httpGet, controller } from 'inversify-express-utils';
import TYPES from "@constants/Types";
import { schemaValidate, userSchema } from '@validates/schemaValidates';
import { REQUEST_TYPES } from "@src/constants/Consts";
@controller('/')
export class HelloWorldController {
  private logServ: IlogService;
  public constructor(@inject(TYPES.LOG_SERVICE) logServ: IlogService) {
    this.logServ = logServ;
  }

  @httpGet('/', schemaValidate(userSchema,REQUEST_TYPES.QUERY))
  public hello(): string {
    return this.logServ.showLog("Hello Typescript");
  }
}
