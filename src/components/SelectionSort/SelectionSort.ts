export class selectionSort {
  array: number[];

  constructor(numbers: number[]) {
	this.array = [...numbers];
  }

  isSort() {
	let startItem = 0;
	let maxItems = this.array.length;

	for (startItem; startItem < maxItems - 1; startItem++) {
	  let minValueIndex = startItem;

	  for (let j = startItem + 1; j < maxItems; j++) {
		if (this.array[j] < this.array[minValueIndex]) {
		  minValueIndex = j;
		}
	  }

	  const temp = this.array[minValueIndex];
	  this.array[minValueIndex] = this.array[startItem];
	  this.array[startItem] = temp;
	}
	return this.array;
  }
}
