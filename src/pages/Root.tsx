import * as React from "react"
import {
  Routes,
  Route,
  // BrowserRouter,
  Link,
} from "react-router-dom"

import { SuspenseRouter } from "../components/SuspenseRouter"

// https://github.com/gregberge/loadable-components
// https://loadable-components.com/
// https://www.robinwieruch.de/react-router-lazy-loading/
// https://www.positronx.io/react-lazy-loading-router-using-react-router-dom-tutorial/

const Contact = React.lazy(() =>
  import("./Contact.js").then((r) => ({ default: r.Page }))
)
const Welcome = React.lazy(() =>
  import("./Welcome.js").then((r) => ({ default: r.Page }))
)

export const Root = () => (
  <React.Suspense fallback={<div>Loading Root...</div>}>
    <SuspenseRouter>
      {(options) => {
        const { isPending } = options
        return (
          <>
            {isPending && <div>Pending...</div>}
            <React.Suspense fallback={<div>Loading Route in Root...</div>}>
              <nav>
                <Link to="/">Welcome</Link>
                <Link to="/contact">Contact</Link>
              </nav>
              <Routes>
                <Route index element={<Welcome />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </React.Suspense>
          </>
        )
      }}
    </SuspenseRouter>
  </React.Suspense>
)
