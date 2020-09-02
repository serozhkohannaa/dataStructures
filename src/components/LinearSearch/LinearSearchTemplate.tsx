import React, { FC, FormEvent, Fragment, useState } from 'react';
import { LinearSearch } from "./LinearSearch";

interface Props {
  numbersInput?: HTMLInputElement | null;
  numberFind?: HTMLInputElement | null;
}

const LinearSearchTemplate: FC<Props> = ({numbersInput, numberFind }) => {
  let [array, setArray] = useState();
  let [findNumber, setFind] = useState();

  const handleSubmit = (e: FormEvent) => {
	e.preventDefault();
	setArray(numbersInput?.value.split(' '));
	setFind(numberFind?.value);
  }

  const renderFind = () => {
	const SEARCH = new LinearSearch(array || []);
	return <div className='field'>
	  <p>POSITION: <span>{SEARCH.indexOf(findNumber)}</span></p>
	</div>
  }

  return <section className='section section-linear-search'>
	<div className="content">
	  <div className="title-component">
		<h4>Linear search</h4>
	  </div>
	  <div className="description-component">
		<div className="field is-transparent">
		  <p>In computer science, a linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.</p>
		</div>
		<div className="field">
		  <p>Average complexity: O(n)</p>
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
	  {`export class LinearSearch {
  array: number[];

  constructor(data: number[]) {
\tthis.array = data;
  }

  indexOf(target: number | string): (number | string) {
\tconst array = this.array ? this.array : [];

\tlet maxItems = array.length;
\tlet startItem = 0;

\tfor (startItem; startItem < maxItems; startItem++) {
\t  if (array[startItem] == target) {
\t\treturn startItem;
\t  }
\t}
\treturn 'Not Found';
  }
}
`}
    </textarea>
  </section>
}

export default LinearSearchTemplate;