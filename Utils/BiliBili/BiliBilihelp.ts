import axiod from "axiod";
import type {
  BiliBiliPage,
  DataObj,
  DimensionObj,
} from "../../Types/BiliBili/index.ts";

export default class BiliBiliHelp {
  public async GetBiliBiliPageRawAsync({ path }: { path: string }) {
    const response = await axiod.get(path);
    const page = response.data as BiliBiliPage;
    return page;
  }
}
