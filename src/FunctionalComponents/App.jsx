import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'

export default function App() {
  
  var [language,setlanguage]=useState("hi")
  var [search,setsearch]=useState("")
  let changeLanguage=(data)=>{
     setlanguage(data)
    // console.log("check");
  }
  let changeSearch=(data)=>{
    // alert(data)
    setsearch(data)
 }
 
    return (
    <>
   <BrowserRouter>
    <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch}/>
   

    <Routes>
        <Route path="" element={<Home search={search} language={language} q="All"/>} ></Route>
        <Route path="/Politics" element={<Home search={search} language={language} q="Politics"/>} ></Route>
        <Route path="/Crime" element={<Home search={search} language={language} q="Crime"/>} ></Route>
        <Route path="/Education" element={<Home search={search} language={language} q="Education"/>} ></Route>
        <Route path="/Science" element={<Home search={search} language={language} q="Science"/>} ></Route>
        <Route path="/Technology" element={<Home search={search} language={language} q="Technology"/>} ></Route>
        <Route path="/Covid" element={<Home search={search} language={language} q="Covid"/>} ></Route>
        <Route path="/Fifa" element={<Home search={search} language={language} q="Fifa"/>} ></Route>
        <Route path="/India" element={<Home search={search} language={language} q="India"/>} ></Route>
        <Route path="/World News" element={<Home search={search} language={language} q="World News"/>} ></Route>
        <Route path="/Cricket" element={<Home search={search} language={language} q="Cricket"/>} ></Route>
        <Route path="/Games" element={<Home search={search} language={language} q="Games"/>} ></Route>
        <Route path="/Jokes" element={<Home search={search} language={language} q="Jokes"/>} ></Route>

       
    </Routes>
    
   </BrowserRouter>
   <Footer/>
    </>
    )
  }

