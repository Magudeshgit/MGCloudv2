//React Imports
import { Route, Routes } from 'react-router-dom'
import { AuthProvider, RequireAuth } from './authcontext'

// Component and Page imports
import Home from './pages/landing'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Test from './pages/home'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/home' element={<Test/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
