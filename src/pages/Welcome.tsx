import { Badge } from "../components"

export const Page = () => (
  <div>
    <h2>
      Welcome <Badge>2</Badge>
    </h2>
    <p>
      Welcome. This is a demo about lazy-loading and code-splitting in React.
      This is also using esbuild for bundling.
    </p>
  </div>
)
