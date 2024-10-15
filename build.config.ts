import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      input: "src/",
      outDir: "dist/esm/",
      format: "esm",
      ext: "js",
    },
    {
      input: "src/",
      outDir: "dist/cjs/",
      format: "cjs",
      ext: "js",
    },
  ],
  declaration: "compatible",
  clean: true,
});
