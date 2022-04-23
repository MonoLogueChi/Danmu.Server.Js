import * as Drash from "drash";
import BiliBiliHelp from "../../../../Utils/BiliBili/BiliBiliHelp.ts";

export default class DanmuV1BiliBili extends Drash.Resource {
  public paths = ["/api/danmu/v1/bilibili/:bvid?"];

  b = new BiliBiliHelp();
  c = this.b.GetBiliBiliPageRawAsync({
    path: "https://api.bilibili.com/x/player/pagelist?bvid=BV1zE411r7k1",
  });

  public async GET(request: Drash.Request, response: Drash.Response) {
    return response.json((await this.c).Data);
  }
}
