import React, { FC, FormEvent, Fragment, useState } from 'react';
import { bubbleSort } from "./BubleSort";

interface Props {
  numbersInput?: HTMLInputElement | null;
}

const BubleSortTemplate: FC<Props> = ({numbersInput}) => {
  let [array, setArray] = useState();

  const handleSubmit = (e: FormEvent) => {
	e.preventDefault();
	let numberArray = numbersInput?.value.split(' ').map(item => +item);
	setArray(numberArray);
  }

  const renderFind = () => {
	const SORT = new bubbleSort(array || []);
	return <div className='field'>
	  <p>Sorted: {SORT.isSort().join(' ')}</p>
	</div>
  }

  return <section className='section section-binary-search'>
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
	  <form className="form-component" onSubmit={handleSubmit}>
		<label htmlFor="arrayData">Enter numbers</label>
		<input id='arrayData' required ref={(input) => numbersInput = input} />
		<button>submit</button>
	  </form>
	  {array && renderFind()}
	</div>

	<textarea className="code-sample">
	  {
	    `export class bubbleSort {
  array: number[];

  constructor(numbers: number[]) {
\tthis.array = [...numbers];
  }

  isSort() {
\tlet startItem = 0;
\tlet maxItems = this.array.length;

\tfor (startItem; startItem < maxItems; startItem++) {
\t  for (let j = 0; j < maxItems - 1; j++) {

\t\tif (this.array[j] > this.array[j + 1]) {
\t\t  let swap = this.array[j];
\t\t  this.array[j] = this.array[j + 1];
\t\t  this.array[j + 1] = swap;
\t\t}
\t  }
\t}
\treturn this.array;
  }
}`
	  }
    </textarea>
  </section>
}

export default  BubleSortTemplate;