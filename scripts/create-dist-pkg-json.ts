import fs from "node:fs/promises";

await fs.writeFile("./dist/cjs/package.json", JSON.stringify({ type: "commonjs" }, null, 2), "utf-8");
