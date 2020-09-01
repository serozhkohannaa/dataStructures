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
    console.log();
    setArray(numbersInput?.value.split(' '));
    setFind(numberFind?.value);
  }

  const renderFind = () => {
    const SEARCH = new BinarySearch(array || []);
    console.log(array);
    return <div>

      {SEARCH.indexOf(findNumber)}
    </div>
  }

  return <div>
  <div className="title-component">
  </div>
    <form className="input-component" onSubmit={handleSubmit}>
      <label htmlFor="arrayData">Enter numbers</label>
      <input id='arrayData' required ref={(input) => numbersInput = input} />
      <label htmlFor="dataFind">Enter number to find</label>
      <input type="number" required ref={(input) => numberFind = input} />
      <button>submit</button>
    </form>
    {array && renderFind()}
  </div>
}

export default BinarySearchTemplate;