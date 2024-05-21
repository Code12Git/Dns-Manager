
import {Routes,Route} from 'react-router-dom'
import Signup from './routes/Signup'
import Signin from './routes/Signin'
import { Toaster } from 'react-hot-toast'
import Dashboard from './routes/Dashboard'
function App() {


  return (
    <>
      <Toaster />
    <Routes>
       <Route path = '/' element={<Dashboard />} />
       <Route path='/signup' element={<Signup />} />
       <Route path = '/signin' element={<Signin />} />
    </Routes>
    </>
  )
}

export default App
