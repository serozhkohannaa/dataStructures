import React from 'react';
import './App.scss';

import BinarySearchTemplate from "./components/BinarySearch/BinarySearchTemplate";
import LinearSearchTemplate from "./components/LinearSearch/LinearSearchTemplate";
import BubleSortTemplate from "./components/BubleSort/BubleSortTemplate";
import InsertionSortTemplate from "./components/InsertionSort/InsertionSortTemplate";
import SelectionSortTemplate from "./components/SelectionSort/SelectionSortTemplate";

function App() {
  return (
    <main className="app">
      <div className="page-title">
        <h2>algorithms</h2>
      </div>
      <LinearSearchTemplate/>
      <BinarySearchTemplate/>
      <BubleSortTemplate/>
      <InsertionSortTemplate/>
      <SelectionSortTemplate/>
    </main>
  );
}

export default App;
