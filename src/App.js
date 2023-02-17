import React from 'react'
import './App.css'
import Front from './component/Front'
import Body from './component/Body'
import Footer from './component/Footer'
import Choose from './component/Choose'
import Review from './component/Review'

const App = () => {
  return (
    <div><Front/><Body/><Review/><Choose/><Footer/></div>
  )
}

export default App