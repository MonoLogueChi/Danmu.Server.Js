import * as Drash from "drash";
import Resources from "./Resources/index.ts";

// Create and run your server

const server = new Drash.Server({
  hostname: "localhost",
  port: 1447,
  protocol: "http",
  resources: Resources,
});

server.run();

console.log(`Server running at ${server.address}.`);
