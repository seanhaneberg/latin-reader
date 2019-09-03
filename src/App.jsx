import React from 'react';
import './App.css';
import Catullus from './translations/catullus-13.json'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {Catullus.name}
            </header>
            <div>
                <div>
                    Author: {Catullus.author}
                </div>
                <div>
                    Original: {Catullus.original}
                </div>
                <div>
                    Translation: {Catullus.literal_translation}
                </div>
            </div>
        </div>
  );
}

export default App;
