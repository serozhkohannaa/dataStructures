import React, { FC, FormEvent, useState } from 'react';
import { linkedListDataStructure } from "./LinkedListDataStructure";

interface Props {
  numbersInput?: HTMLInputElement | null;
}

const LinkedListDataStructureT: FC<Props> = ({numbersInput}) => {
  const [maxAmount, setMax] = useState();

  const handleSubmit = (e: FormEvent) => {
	e.preventDefault();
	setMax(numbersInput?.value);
  }

  const renderTemplate = () => {
	const LINKEDLIST = new linkedListDataStructure<any>();
	//
	// LINKEDLIST.insertFirst('item1');
	// LINKEDLIST.insertFirst('item2');
	// LINKEDLIST.listContents();
	console.log(linkedListDataStructure)

  }

  return <section>
	<div className="content">
	  <div className="title-component">
		<h4>Linked List</h4>
	  </div>
	  <div className="description-component">
		<div className="field is-transparent">
		  <p>In computer science, a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.</p>
		</div>
		<div className="field">
		  <p>Average complexity search: O(n)</p>
		  <p>Average complexity delete: O(1)</p>
		</div>
	  </div>
	  <form className="form-component" onSubmit={handleSubmit}>
		<label htmlFor="arrayData">Enter max amount (max 10, min 2)</label>
		<input type='number' id='arrayData' max={10} min={2} required ref={(input) => numbersInput = input}/>
		<button>submit</button>
	  </form>
	  {maxAmount && renderTemplate()}
	</div>

	<div className="code-sample">
	  code will be here
	</div>
  </section>
}

export default LinkedListDataStructureT;