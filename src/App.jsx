import React from 'react';
import './App.css';
import data from './data/recipes.json';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu recipes={data} />
      </header>
    </div>
  );
}

export default App;
