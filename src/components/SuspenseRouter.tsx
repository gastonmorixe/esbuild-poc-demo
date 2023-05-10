import {
  Children,
  FC,
  cloneElement,
  isValidElement,
  useLayoutEffect,
  useRef,
  useState,
  useTransition,
} from "react"
import { Router } from "react-router-dom"
import {
  BrowserHistoryOptions,
  BrowserHistory,
  createBrowserHistory,
  Update,
} from "history"

export interface BrowserRouterProps {
  basename?: string
  children: (options: { isPending: boolean }) => React.ReactNode
  window?: Window
}

export const SuspenseRouter: FC<BrowserRouterProps> = (props) => {
  const { basename, children, window } = props

  const historyRef = useRef<BrowserHistory>()
  const [isPending, startTransition] = useTransition()

  if (!historyRef.current) {
    historyRef.current = createBrowserHistory({ window })
  }

  const history = historyRef.current
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  function setStateAsync(update: Update) {
    startTransition(() => {
      setState(update)
    })
  }

  useLayoutEffect(() => history.listen(setStateAsync), [history])

  return (
    <Router
      {...{ basename }}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children?.({ isPending }) || null}
    </Router>
  )
}
