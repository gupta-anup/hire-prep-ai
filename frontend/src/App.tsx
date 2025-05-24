import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Home/Dashboard'
import HirePrep from './pages/HirePrep/HirePrep'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<LandingPage />} />

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/hire-prep/:sessionId' element={<HirePrep />} />
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className: '',
          style: {
            fontSize: '13px',
          }
        }}
      />
    </div>
  )
}

export default App