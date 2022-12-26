import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      language:"hi",
      search:""
    }
  }
  changeLanguage=(data)=>{
     this.setState({language:data})
  }
  changeSearch=(data)=>{
    // alert(data)
    this.setState({search:data})
 }
  render() {
    return (
    <>
   <BrowserRouter>
    <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
   

    <Routes>
        <Route path="" element={<Home search={this.state.search} language={this.state.language} q="All"/>} ></Route>
        <Route path="/Politics" element={<Home search={this.state.search} language={this.state.language} q="Politics"/>} ></Route>
        <Route path="/Crime" element={<Home search={this.state.search} language={this.state.language} q="Crime"/>} ></Route>
        <Route path="/Education" element={<Home search={this.state.search} language={this.state.language} q="Education"/>} ></Route>
        <Route path="/Science" element={<Home search={this.state.search} language={this.state.language} q="Science"/>} ></Route>
        <Route path="/Technology" element={<Home search={this.state.search} language={this.state.language} q="Technology"/>} ></Route>
        <Route path="/Covid" element={<Home search={this.state.search} language={this.state.language} q="Covid"/>} ></Route>
        <Route path="/Fifa" element={<Home search={this.state.search} language={this.state.language} q="Fifa"/>} ></Route>
        <Route path="/India" element={<Home search={this.state.search} language={this.state.language} q="India"/>} ></Route>
        <Route path="/World News" element={<Home search={this.state.search} language={this.state.language} q="World News"/>} ></Route>
        <Route path="/Cricket" element={<Home search={this.state.search} language={this.state.language} q="Cricket"/>} ></Route>
        <Route path="/Games" element={<Home search={this.state.search} language={this.state.language} q="Games"/>} ></Route>
        <Route path="/Jokes" element={<Home search={this.state.search} language={this.state.language} q="Jokes"/>} ></Route>

       
    </Routes>
    
   </BrowserRouter>
   <Footer/>
    </>
    )
  }
}
