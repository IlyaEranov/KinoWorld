import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'
import { BrowserRouter } from 'react-router-dom'
import App from "./App"
import { SkeletonTheme } from 'react-loading-skeleton'

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <SkeletonTheme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SkeletonTheme>
  </Provider>
)
