import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"

import { Root } from "./pages/Root"

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<div>Loading Root...</div>}>
        <Root />
      </Suspense>
    </StrictMode>
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
