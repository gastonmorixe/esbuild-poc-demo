// {
//   "entry": "./src/app.tsx",
//   "outfile": "./dist/bundle.js",
//   "external": ["react", "react-dom"],
//   "loader": { ".js": "jsx", ".png": "base64" },
//   "minify": true
// }

import {
  build,
  // analyzeMetafile
} from "esbuild"

import PACKAGE_JSON from "./package.json" assert { type: "json" }

const sharedConfig = {
  entryPoints: ["src/index.tsx"],
  bundle: true,
  logLevel: "info", // Adjust log level as per your needs
  // external: Object.keys(PACKAGE_JSON.dependencies || {}).concat(
  //   Object.keys(PACKAGE_JSON.peerDependencies || {})
  // ),
  // keepNames: true,
  // treeShaking: true,
  // metafile: true,

  target: ["esnext"], // Use the latest ECMAScript standard
  // drop: ["debugger", "console"],
  // minify: true,
}

// const build0 = build({
//   ...sharedConfig,
//   platform: "node", // for CJS defaults to browser
//   // outfile: "dist/index.js",
//   outdir: "dist",

//   // target: ['node10.4'],
// })

// console.log(build0)

const build1 = build({
  ...sharedConfig,
  // outfile: "dist/index.esm.js",
  outdir: "dist",
  // platform: "neutral", // for ESM
  format: "esm", // https://esbuild.github.io/api/#format
  outExtension: { ".js": ".mjs" }, // https://esbuild.github.io/api/#format-esm
  // outbase: 'src', // https://esbuild.github.io/api/#outbase
  // target web
  sourcemap: true,
  splitting: true,

  // jsxImportSource: 'preact',
  // jsx: 'automatic',

  // https://esbuild.github.io/api/#target
  // default: esnext
  // target: ["chrome100", "firefox57", "safari11", "edge16"],
})

console.log(build1)

// analyzeMetafile(build1.metafile, {
//   verbose: true,
// }).then((r) => console.log(r))
