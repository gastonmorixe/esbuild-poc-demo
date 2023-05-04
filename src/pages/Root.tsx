import * as React from "react"
import { Routes, Route, BrowserRouter, Link } from "react-router-dom"

// https://github.com/gregberge/loadable-components
// https://loadable-components.com/
// https://www.robinwieruch.de/react-router-lazy-loading/
// https://www.positronx.io/react-lazy-loading-router-using-react-router-dom-tutorial/

const Contact = React.lazy(() =>
  import("./Contact").then((r) => ({ default: r.Page }))
)
const Welcome = React.lazy(() =>
  import("./Welcome").then((r) => ({ default: r.Page }))
)

export const Root = () => (
  <div>
    <h1>Hello! {Date.now()}</h1>
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <nav>
          <Link to="/">Welcome</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  </div>
)
