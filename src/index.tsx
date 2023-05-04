import * as React from "react"
import { createRoot } from "react-dom/client"

import { Root } from "./pages/Root"

function App() {
  return (
    <React.StrictMode>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Root />
      </React.Suspense>
    </React.StrictMode>
  )
}

const rootDOM = document.getElementById("root")
if (rootDOM) {
  const root = createRoot(rootDOM)
  root.render(<App />)
} else {
  alert("missing root element!")
  console.error("missing root element!")
}
