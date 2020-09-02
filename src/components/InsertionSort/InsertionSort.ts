export class insertionSort {
  array: number[];

  constructor(numbers: number[]) {
	this.array = [...numbers];
  }

  isSort() {
	let startItem = 0;
	let maxItems = this.array.length;

	for (startItem; startItem < maxItems; startItem++) {
	  let currentItem = this.array[startItem];
	  let j = startItem - 1;

	  while (j >= 0 && this.array[j] > currentItem) {
		this.array[j + 1] = this.array[j];
		j--;
	  }
	  this.array[j + 1] = currentItem;
	}
	return this.array;
  }
}