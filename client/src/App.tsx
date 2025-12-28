import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pricing from './pages/Pricing'
import Community from './pages/Community'
import MyProjects from './pages/MyProjects'
import Preview from './pages/Preview'
import Projects from './pages/Projects'
import Home from './pages/Home'
import View from './pages/View'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/pricing' element ={<Pricing />}/>
        <Route path='/community' element ={<Community />}/>
        <Route path='/projects' element ={<MyProjects />}/>
        <Route path='/preview/:projectId' element ={<Preview />}/>
        <Route path='/preview/:projectId/:versionId' element ={<Preview />}/>
        <Route path='/projects/:projectId' element ={<Projects />}/>
        <Route path='/view/:projectId' element ={<View />}/>
      </Routes>
    </div>
  )
}

export default App
