import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { setupStore } from './store/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
)
