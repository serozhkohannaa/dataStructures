import React, { FC, FormEvent, Fragment, useState } from 'react';
import { selectionSort } from "./SelectionSort";

interface Props {
  numbersInput?: HTMLInputElement | null;
}

const SelectionSortTemplate: FC<Props> = ({numbersInput}) => {
  let [array, setArray] = useState();

  const handleSubmit = (e: FormEvent) => {
	e.preventDefault();
	let numberArray = numbersInput?.value.split(' ').map(item => +item);
	setArray(numberArray);
  }

  const renderFind = () => {
	const SORT = new selectionSort(array || []);
	return <div className='field'>
	  <p>Sorted: {SORT.isSort().join(' ')}</p>
	</div>
  }

  return <section className='section'>
	<div className="content">
	  <div className="title-component">
		<h4>Selection sort</h4>
	  </div>
	  <div className="description-component">
		<div className="field is-transparent">
		  <p>In computer science, selection sort is an in-place comparison sorting algorithm. It has an O(n²) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort.</p>
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
	    `export class selectionSort {
  array: number[];

  constructor(numbers: number[]) {
\tthis.array = [...numbers];
  }

  isSort() {
\tlet startItem = 0;
\tlet maxItems = this.array.length;

\tfor (startItem; startItem < maxItems - 1; startItem++) {
\t  let minValueIndex = startItem;

\t  for (let j = startItem + 1; j < maxItems; j++) {
\t\tif (this.array[j] < this.array[minValueIndex]) {
\t\t  minValueIndex = j;
\t\t}
\t  }

\t  const temp = this.array[minValueIndex];
\t  this.array[minValueIndex] = this.array[startItem];
\t  this.array[startItem] = temp;
\t}
\treturn this.array;
  }
}
`
	  }
    </textarea>
  </section>
}

export default SelectionSortTemplate;