import {
  __toESM,
  require_jsx_runtime
} from "./chunk-AM32QR2C.mjs";

// src/components/Button.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Button = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { children: props.children });

// src/components/Badge.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var Badge = (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "div",
  {
    style: {
      display: "inline-flex",
      aspectRatio: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: "0.75ch",
      fontSize: "0.75em",
      background: "red",
      color: "white",
      fontWeight: "bold",
      borderRadius: "50%",
      overflow: "hidden"
    },
    children: props.children
  }
);

// src/components/Tabs.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());

export {
  Button,
  Badge
};
