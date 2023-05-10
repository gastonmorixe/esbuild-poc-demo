import {
  build,
  // analyzeMetafile
} from "esbuild"

// Support jsx automatic runtime #334
// https://github.com/evanw/esbuild/issues/334

// import PACKAGE_JSON from "./package.json" assert { type: "json" }

const client = build({
  bundle: true,
  entryPoints: ["src/index.tsx"],
  format: "esm", // https://esbuild.github.io/api/#format
  logLevel: "info", // Adjust log level as per your needs
  outdir: "dist",
  outExtension: { ".js": ".mjs" }, // https://esbuild.github.io/api/#format-esm
  sourcemap: false,
  splitting: true,
  target: ["esnext"], // Use the latest ECMAScript standard
  treeShaking: true,
  jsx: "automatic",
  allowOverwrite: true,
  // watch: true,
})

console.log("client", client)
