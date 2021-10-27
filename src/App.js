import React from 'react';
import Button from './Components/Button/index.jsx';
import Card from './Components/Card/index.jsx';
import Search from './Components/Search/index.jsx';

function App() {
  return (
    <div className="App">
        <h1>This is a unit test project!</h1>
        <p>This work out using jest-dom.</p>
        <Card />
        <Button />
        <Search />
    </div>
  );
}

export default App;
