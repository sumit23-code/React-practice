
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/profile" element = {<Profile />}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/register" element = {<Register/>}/>
      
    </Routes>
    </>
  )
}

export default App
