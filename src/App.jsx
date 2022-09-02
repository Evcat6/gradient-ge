import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components'
import { HomePage, NotFoundPage, GitHub } from './pages';

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Layout/> } >
        <Route index element={ <HomePage/> } />
        <Route path='404' element={ <NotFoundPage/> } />
        <Route path='*' element={ <Navigate to='404' /> } />
        <Route path='git-hub' element={ <GitHub/> } />
        <Route path='git-account' element={  <Navigate to='git-hub'/>} />
      </Route>
    </Routes>
  )
}

export default App
