import { Route, Routes, useLocation } from 'react-router-dom'
import Pricing from './pages/Pricing'
import Community from './pages/Community'
import MyProjects from './pages/MyProjects'
import Preview from './pages/Preview'
import Projects from './pages/Projects'
import Home from './pages/Home'
import View from './pages/View'
import Navbar from './components/Navbar'
import { Toaster } from 'sonner'
import AuthPage from './pages/auth/AuthPage'
import Settings from './pages/Settings'


const App = () => {

  const { pathname } = useLocation();

  const hideNavbar = pathname.startsWith('/projects/') && pathname !== '/projects' || pathname.startsWith('/view/') || pathname.startsWith('/preview/')

  return (
    <div>
      <Toaster />
      {!hideNavbar && <Navbar/>}
     
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/pricing' element ={<Pricing />}/>
        <Route path='/community' element ={<Community />}/>
        <Route path='/projects' element ={<MyProjects />}/>
        <Route path='/preview/:projectId' element ={<Preview />}/>
        <Route path='/preview/:projectId/:versionId' element ={<Preview />}/>
        <Route path='/projects/:projectId' element ={<Projects />}/>
        <Route path='/view/:projectId' element ={<View />}/>
        <Route path="/auth/:pathname" element={<AuthPage />} />
        <Route path="/account/settings" element={<Settings />}/>
      </Routes>
    </div>
  )
}

export default App


//8:04