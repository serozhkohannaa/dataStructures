import React, { FC, FormEvent, Fragment, useState } from 'react';
import { insertionSort } from "./InsertionSort";

interface Props {
  numbersInput?: HTMLInputElement | null;
}

const InsertionSortTemplate: FC<Props> = ({numbersInput}) => {
  let [array, setArray] = useState();

  const handleSubmit = (e: FormEvent) => {
	e.preventDefault();
	let numberArray = numbersInput?.value.split(' ').map(item => +item);
	setArray(numberArray);
  }

  const renderFind = () => {
	const SORT = new insertionSort(array || []);
	return <div className='field'>
	  <p>Sorted: {SORT.isSort().join(' ')}</p>
	</div>
  }

  return <section className='section'>
	<div className="content">
	  <div className="title-component">
		<h4>Insertion sort</h4>
	  </div>
	  <div className="description-component">
		<div className="field is-transparent">
		  <p>Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.</p>
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
	    `export class insertionSort {
  array: number[];

  constructor(numbers: number[]) {
\tthis.array = [...numbers];
  }

  isSort() {
\tlet startItem = 0;
\tlet maxItems = this.array.length;

\tfor (startItem; startItem < maxItems; startItem++) {
\t  let currentItem = this.array[startItem];
\t  let j = startItem - 1;

\t  while (j >= 0 && this.array[j] > currentItem) {
\t\tthis.array[j + 1] = this.array[j];
\t\tj--;
\t  }
\t  this.array[j + 1] = currentItem;
\t}
\treturn this.array;
  }
}`
	  }
    </textarea>
  </section>
}

export default InsertionSortTemplate;