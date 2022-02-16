import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

Sentry.init({
  dsn: "https://7994ce980074495a95dca7a497541016@o1140961.ingest.sentry.io/6198612",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})


const GlobalStyle = createGlobalStyle`
:root {
  --blue: #7ff9db
  --pink: #bc4c84
  --green: #80ed84
}
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
`

const renderLoader = () => <p>Loading...</p>

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Suspense fallback={renderLoader()}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
