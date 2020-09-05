import React, { FC, FormEvent, useState } from 'react';
import { StackDataStructure } from "./StackDataStructure";

interface Props {
  numbersInput?: HTMLInputElement | null;
}

const StackDataStrucureT: FC<Props> = ({numbersInput}) => {
  const [maxAmount, setMax] = useState();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMax(numbersInput?.value);
  }

  const renderTemplate = () => {
    const STACK = new StackDataStructure<number>(+maxAmount || 10);

    while (!STACK.isFull()) {
      STACK.push(Math.round(Math.random() * 100));
    }

    return <div>
      <p className='field'>Random arranged stack</p>
      <div className="is-code">
        {STACK.stackContents().map((item, i) => <p>Was entered <b>{i}</b> itemValue <b>{item}</b></p>)}
      </div>
      <p className='field'>Peek first element</p>
      <div className="is-code">
        {STACK.top()}
      </div>
      <p className='field'>Clean stack</p>
      <div className="is-code">
        {STACK.pop().map((item, i) => item && <p>Was entered <b>{i}</b> itemValue <b>{item}</b></p>)}
      </div>
    </div>
  }

  return <section className='section'>
    <div className="content">
      <div className="title-component">
        <h4>STACK FILO</h4>
      </div>
      <div className="description-component">
        <div className="field is-transparent">
          <p>In computer science, a stack is an abstract data type that serves as a collection of elements, with two main principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed.</p>
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
      {'export  class StackDataStructure<T> {\n' +
      '  private stack: T[];\n' +
      '  private length: number;\n' +
      '  private readonly maxSize: number;\n' +
      '  private readonly minSize: number = 1;\n' +
      '\n' +
      '  public constructor(maxSize: number) {\n' +
      '\tthis.length = 0;\n' +
      '\tthis.maxSize = maxSize > 0 ? maxSize : this.minSize;\n' +
      '\tthis.stack = new Array<T>(this.maxSize);\n' +
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
      '  public push(pushItem: T): void {\n' +
      '\tif (this.isFull()) {\n' +
      '\t  console.log(\'Max size is reached\')\n' +
      '\t}\n' +
      '\n' +
      '\tthis.stack[this.length++] = pushItem;\n' +
      '  }\n' +
      '\n' +
      '  public pop() {\n' +
      '\tif (this.isEmpty()) {\n' +
      '\t  console.log(\'The stack is empty\')\n' +
      '\t}\n' +
      '\n' +
      '\tlet data = this.stack.map((item, i) => {\n' +
      '\t  return this.stack[i] = this.stack[--this.length]\n' +
      '\t})\n' +
      '\n' +
      '\treturn data;\n' +
      '  }\n' +
      '\n' +
      '  public top(): T {\n' +
      '\tif (this.isEmpty()) {\n' +
      '\t  console.log(\'The stack is empty\')\n' +
      '\t}\n' +
      '\n' +
      '\treturn this.stack[this.length - 1];\n' +
      '  }\n' +
      '\n' +
      '  public stackContents() {\n' +
      '\tconsole.log(`Stack content, amount ${this.length}`);\n' +
      '\tthis.length !== 0 && this.stack.forEach((item, i) => console.log(`was entered: ${i}, itemValue: ${item}`))\n' +
      '\n' +
      '\treturn this.stack;\n' +
      '  }\n' +
      '}'}
    </textarea>

  </section>
}

export default StackDataStrucureT;