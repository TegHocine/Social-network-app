import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

import './index.scss'
function App() {
  return (
    <div className='app'>
      <div className='blur blur-top'></div>
      <div className='blur blur-mid'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
