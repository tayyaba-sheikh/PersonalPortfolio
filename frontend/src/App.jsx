import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get("/api")
      .then(res => setMessage(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <div>
        <h1>Portfolio Frontend 🚀</h1>
        <p>Backend says: {message}</p>
      </div>
    </>
  )
}

export default App
