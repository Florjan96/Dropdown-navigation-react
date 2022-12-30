import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="main">

      <div className="header">
 
 <div className="header-left">
  <h1>snap</h1>
 </div>

 <div className="header-middle">
  <ul>
    <li>Features</li>
    <li>Company</li>
    <li>Careers</li>
    <li>About</li>
  </ul>
 </div>
 
 <div className="header-right">
  <h4>Login</h4>
  <h4>Register</h4>
 </div>

      </div>
    
    <div className="left-side">
<h1>left</h1>
    </div>
    
    <div className="right-side">Rigt</div>
    </div>
    </div>
  )
}

export default App
