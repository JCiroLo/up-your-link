import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'
import ProviderComposer from './store/ProviderComposer'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

import './assets/scss/_composer.scss'

function App () {
  return (
    <ProviderComposer>
      <BrowserRouter>
        <div className='app'>
          <Sidebar />
          <div className='app-content'>
            <Header />
            <main>
              <AppRouter />
            </main>
          </div>
        </div>
      </BrowserRouter>
    </ProviderComposer>
  )
}

export default App
