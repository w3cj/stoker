import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      input: "src/",
      outDir: "dist/esm/",
      format: "esm",
    },
    {
      input: "src/",
      outDir: "dist/cjs/",
      format: "cjs",
      ext: "cjs",
    },
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
