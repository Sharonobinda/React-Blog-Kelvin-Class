import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from './pages/About';
import AddBlog from './pages/AddBlog';
import Layout from "./Layout"
import LayoutAdmin from './LayoutAdmin';
import AdminLogin from './pages/AdminLogin';
import NoPage from './pages/NoPage';
import Blog from './pages/Blog';
import UpdateBlog from './pages/UpdateBlog';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/addblog' element={<AddBlog />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/update/:post_id' element={<UpdateBlog />} />

        <Route path="*" element={<NoPage />} />
      </Route>
      <Route path='/admin/' element={<LayoutAdmin/>}>
        <Route path='login' element={<AdminLogin />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
