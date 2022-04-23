import * as Drash from "drash";
import { renderFileToString } from "dejs";

export default class HomeResource extends Drash.Resource {
  public paths = ["/"];

  private homeHtml = renderFileToString( "View/index.ejs", {
    title: "弹幕服务器",
  });
  public async GET(request: Drash.Request, response: Drash.Response) {
    return response.html(await this.homeHtml);
  }
}
