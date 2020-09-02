import React, { FC, FormEvent, useState } from 'react';
import { QueueDataStructure } from "./QueueDataStructure";

interface Props {
  numbersInput?: HTMLInputElement | null;
}

const QueueDataStructureT: FC<Props> = ({numbersInput}) => {
  const [maxAmount, setMax] = useState();

  const handleSubmit = (e: FormEvent) => {
	e.preventDefault();
	setMax(numbersInput?.value);
  }

  const renderTemplate = () => {
	const QUEUE = new QueueDataStructure<number>(+maxAmount || 10);

	while (!QUEUE.isFull()) {
	  QUEUE.enqueue(Math.round(Math.random() * 100));
	}

	return <div>
	  <p className='field'>Random arranged queue</p>
	  <div className="is-code">
		{QUEUE.queueContents().map((item, i) => <p>Was entered <b>{i}</b> itemValue <b>{item}</b></p>)}
	  </div>
	  <p className='field'>Peek first element</p>
	  <div className="is-code">
		{QUEUE.peek()}
	  </div>
	  <p className='field'>Clean queue</p>
	  <div className="is-code">
		{QUEUE.dequeue().map((item, i) => item && <p>Was entered <b>{i}</b> itemValue <b>{item}</b></p>)}
	  </div>
	</div>
  }

  return <section className="section">
	<div className="content">
	  <div className="title-component">
		<h4>Queue</h4>
	  </div>
	  <div className="description-component">
		<div className="field is-transparent">
		  <p>n computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence.</p>
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

	<textarea className="code-sample">
	  {
	    'class QueueDataStructure<T> {\n' +
		'  private queue: T[];\n' +
		'  private length: number; // number of elements currently in the queue\n' +
		'  private maxSize: number; // maximum number of elements queue can contain\n' +
		'  private minSize: number = 1;\n' +
		'\n' +
		'  public constructor(maxSize) {\n' +
		'\tthis.maxSize = maxSize > 0 ? maxSize : this.minSize;\n' +
		'\tthis.length = 0;\n' +
		'\tthis.queue = new Array<T>(this.maxSize);\n' +
		'  }\n' +
		'\n' +
		'  public isEmpty(): boolean {\n' +
		'\treturn this.length === 0;\n' +
		'  }\n' +
		'\n' +
		'  public isFull(): boolean {\n' +
		'\treturn this.length === this.maxSize;\n' +
		'  }\n' +
		'\n' +
		'  public enqueue(pushItem: T): void {\n' +
		'\tif (this.isFull()) {\n' +
		'\t  console.log(\'Max size is reached\')\n' +
		'\t} else {\n' +
		'\t  this.queue[this.length++] = pushItem;\n' +
		'\t}\n' +
		'  }\n' +
		'\n' +
		'  public dequeue(): T {\n' +
		'\tif (this.isEmpty()) {\n' +
		'\t  console.log(\'The queue is empty\')\n' +
		'\t}\n' +
		'\n' +
		'\tconst shiftItem = this.queue[0];\n' +
		'\n' +
		'\tthis.queue.forEach((item, i) => {\n' +
		'\t  this.queue[i] = this.queue[i + 1];\n' +
		'\t})\n' +
		'\n' +
		'\tthis.length--;\n' +
		'\n' +
		'\treturn shiftItem;\n' +
		'  }\n' +
		'\n' +
		'  public peek(): T {\n' +
		'\tif (this.isEmpty()) {\n' +
		'\t  throw new Error(\'Queue is empty\');\n' +
		'\t}\n' +
		'\treturn this.queue[0];\n' +
		'  }\n' +
		'\n' +
		'  public queueContents(): void {\n' +
		'\tconsole.log(`Queue content, amount ${this.length}`);\n' +
		'\tthis.length !== 0 && this.queue.forEach((item, i) => console.log(`was entered: ${i}, itemValue: ${item}`));\n' +
		'  }\n' +
		'}\n'
	  }
    </textarea>
  </section>
}

export default QueueDataStructureT;