import fg from "fast-glob";
import fs from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

await fs.writeFile("./dist/cjs/package.json", JSON.stringify({ type: "commonjs" }, null, 2), "utf-8");

const dir = fileURLToPath(new URL("..", import.meta.url));
const dts = await fg(resolve(dir, "dist/cjs/**/*.d.ts"));

await Promise.all(dts.map(async (file) => {
  const source = await fs.readFile(file, "utf-8");
  if (source.match(/export default /)) {
    await fs.writeFile(file, source.replace("export default ", "export = "), "utf-8");
  }
}));
