export class bubbleSort {
  array: number[];

  constructor(numbers: number[]) {
	this.array = [...numbers];
  }

  isSort() {
	let startItem = 0;
	let maxItems = this.array.length;

	for (startItem; startItem < maxItems; startItem++) {
	  for (let j = 0; j < maxItems - 1; j++) {

		if (this.array[j] > this.array[j + 1]) {
		  let swap = this.array[j];
		  this.array[j] = this.array[j + 1];
		  this.array[j + 1] = swap;
		}
	  }
	}
	return this.array;
  }
}
