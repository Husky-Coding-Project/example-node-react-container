import './App.css';
import { useState } from 'react';

function App() {

  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001'
    fetch(BASE_URL + '/test')
      .then(response => {
        if (!response.ok) {
          throw Error("Error in request: " + response.statusText);
        } else {
          return response;
        }
      })
      .then(response => response.json())
      // .then(resp => console.log(resp))
      .then(response => setMessage(`The server said hello back at ${response.time}`))
      .catch(error => console.log(error));
    console.log("BASE_URL: " + BASE_URL);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Example React App
        </p>
      </header>
      <input type="button" className="button" onClick={handleButtonClick} value="Say hello to the server"/>
      <p>{message}</p>
    </div>  
  );
}

export default App;
