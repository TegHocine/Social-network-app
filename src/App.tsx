import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

import './index.scss'
import AuthPage from './pages/authpage/AuthPage'
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </div>
  )
}

export default App
