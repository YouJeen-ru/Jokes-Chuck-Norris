import React from 'react';
import './App.css';

const API_URL = `http://api.icndb.com/jokes/random`;

function App() {
    return (
        <div className="box">
            <h3>Chuck Norris Jokes Generator</h3>
            <p>Here goes the joke</p>
            <button>Get new joke ^_^</button>
        </div>
    );
}

export default App;
