import React from 'react';
import './App.css';
import Table from './components/Table';
import { PlanetProvider } from './components/PlanetContext';
import Header from './components/Header';

function App() {
  return (
    <PlanetProvider>
      <div className="App">
        <Header />
        <Table />
      </div>
    </PlanetProvider>
  );
}

export default App;
