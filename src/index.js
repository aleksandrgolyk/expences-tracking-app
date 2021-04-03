import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter as Router } from 'react-router-dom'
import { SessionProvider } from 'app/context/SessionContext'
import 'app/config/root.scss'
import 'app/styles/index.css'

ReactDOM.render(
  <SessionProvider>
    <Router>
      <App />
    </Router>
  </SessionProvider>,

  document.getElementById('root')
)
