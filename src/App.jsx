//React Imports
import { Route, Routes } from 'react-router-dom'
import { AuthProvider, RequireAuth } from './authcontext'

// Component and Page imports
import Home from './pages/landing'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Test from './pages/home'
import NewUpload from './pages/upload'
import Folders from './pages/folders'
import Mgsecure from './pages/mgsecure'
import Trash from './pages/trash'
import Favourites from './pages/favourites'
import Files from './pages/files'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>

        <Route path='/home' element={<RequireAuth><Test/></RequireAuth>}/>
        <Route path='/upload' element={<RequireAuth><NewUpload/></RequireAuth>}/>

        <Route path='/files' element={<RequireAuth><Files/></RequireAuth>}/>
        <Route path='/favourites' element={<RequireAuth><Favourites/></RequireAuth>}/>
        <Route path='/folders' element={<RequireAuth><Folders/></RequireAuth>}/>
        <Route path='/mgsecure' element={<RequireAuth><Mgsecure/></RequireAuth>}/>
        <Route path='/trash' element={<RequireAuth><Trash/></RequireAuth>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
