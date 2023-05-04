import * as React from "react"

export const Button: React.FC<React.PropsWithChildren> = (props) => (
  <button>{props.children}</button>
)
