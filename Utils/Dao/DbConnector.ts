import { Database, SQLite3Connector } from "denodb";

const DanMuConnector = new SQLite3Connector({
  filepath: "./danmu.sqlite",
});

const DanMuDb = new Database(DanMuConnector);

export { DanMuDb };
