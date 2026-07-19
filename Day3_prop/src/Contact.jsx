import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [count, setCount] = useState(0);
  return (
    <div class ="counter-container">
      <p id="para">you have clicked{count}</p>
      <button id ="btn" onClick={()=>{ setCount(count+1)
      }}>Click me</button>
    </div>
  )
}

export default Contact
