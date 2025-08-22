
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/navbar'
import UseState from './pages/30-07/UseState'
import UseEffect from './pages/30-07/UseEFfect'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/profile" element = {<Profile />}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/register" element = {<Register/>}/>
      <Route path="/use-state" element = {<UseState/>}/>
      <Route path="/use-effect" element = {<UseEffect/>}/>
      
    </Routes>
    </>
  )
}

export default App
