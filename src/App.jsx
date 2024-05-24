//React Imports
import { Route, Routes } from 'react-router-dom'

// Component and Page imports
import Home from './pages/home'
import Signup from './pages/signup'
import Signin from './pages/signin'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
  )
}

export default App
