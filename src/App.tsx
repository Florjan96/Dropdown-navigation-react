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
    <li><a href='#' >Features</a></li>
    <li><a href='#' >Company</a></li>
    <li><a href='#' >Careers</a></li>
    <li><a href='#' >About</a></li>
  </ul>
 </div>

 <div className="header-right">
  <h4>Login</h4>
  <h4>Register</h4>
 </div>

      </div>
    
    <div className="left-side">

<div className="big-ckrim">
  <h1>Make remote work</h1>
<div className="description">
  <p>Get your team in sync , no matter your location .Streamline processes ,create team rituals,and watch productivity soar.</p>
</div>

<div className="learn-more">
  <button>Learn more</button>
</div>

</div>


    </div>
    
    <div className="right-side">Rigt</div>
    </div>
    </div>
  )
}

export default App
