import React, { FC, FormEvent, Fragment, useState } from 'react';
import { BinarySearch } from "./BinarySearch";

interface Props {
  numbersInput?: HTMLInputElement | null;
  numberFind?: HTMLInputElement | null;
}

const BinarySearchTemplate: FC<Props> = ({numbersInput, numberFind}) => {
  let [array, setArray] = useState();
  let [findNumber, setFind] = useState();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setArray(numbersInput?.value.split(' '));
    setFind(numberFind?.value);
  }

  const renderFind = () => {
    const SEARCH = new BinarySearch(array || []);
    return <div className='field'>
      <p>POSITION: <span>{SEARCH.indexOf(findNumber)}</span></p>
    </div>
  }

  return <section className='section section-binary-search'>
  <div className="content">
    <div className="title-component">
      <h4>Binary search</h4>
    </div>
    <div className="description-component">
      <div className="field is-transparent">
        <p>In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.</p>
      </div>
      <div className="field">
        <p>Average complexity: O(log n)</p>
      </div>
    </div>
    <form className="form-component" onSubmit={handleSubmit}>
      <label htmlFor="arrayData">Enter numbers</label>
      <input id='arrayData' required ref={(input) => numbersInput = input} />
      <label htmlFor="dataFind">Enter number to find</label>
      <input type="number" required ref={(input) => numberFind = input} />
      <button>submit</button>
    </form>
    {array && renderFind()}
  </div>

    <textarea className="code-sample">
      {`export class BinarySearch {
  array: number[];

  constructor(numbers: number[]) {
\tconst sortedArray = [...numbers].sort((a, b) => a - b)
\tthis.array = sortedArray;
  }

  indexOf(target: number) {
\tconst array = this.array ? this.array : [];

\tlet startItem = 0;
\tlet maxItems = array.length;

\twhile (startItem <= maxItems) {
\t  const middleValue= Math.floor((startItem + maxItems) / 2)

\t  if (array[middleValue] === target) {
\t\treturn middleValue
\t  } else if (array[middleValue] < target) {
\t\tstartItem = middleValue + 1
\t  } else {
\t\tmaxItems = middleValue - 1
\t  }
\t}
\treturn 'Not found'
  }
}`}
    </textarea>
  </section>
}

export default BinarySearchTemplate;