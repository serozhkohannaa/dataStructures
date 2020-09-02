import React from 'react';
import './App.scss';

import BinarySearchTemplate from "./components/BinarySearch/BinarySearchTemplate";
import LinearSearchTemplate from "./components/LinearSearch/LinearSearchTemplate";

function App() {
  return (
    <main className="app">
      <div className="page-title">
        <h2>algorithms</h2>
      </div>
      <LinearSearchTemplate/>
      <BinarySearchTemplate/>
    </main>
  );
}

export default App;
