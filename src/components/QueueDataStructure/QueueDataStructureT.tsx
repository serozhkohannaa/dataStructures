import React from 'react';
import { QueueDataStructure, QUEUE } from "./QueueDataStructure";


console.log(QUEUE);

const QueueDataStructureT = () => {
  return <section className="section">
    <div className="content">
      <div className="title-component">
        <h4>Bubble sort</h4>
      </div>
      <div className="description-component">
        <div className="field is-transparent">
          <p>Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</p>
        </div>
        <div className="field">
          <p>Average complexity: n^2</p>
        </div>
      </div>
      <form className="form-component" >
        <label htmlFor="arrayData">Enter numbers</label>
        <input id='arrayData' required />
        <button>submit</button>
      </form>
    </div>

    <textarea className="code-sample">

    </textarea>
  </section>
}

export default QueueDataStructureT;