export class LinearSearch {
  array: number[];

  constructor(data: number[]) {
	this.array = data;
  }

  indexOf(target: number | string): (number | string) {
	const array = this.array ? this.array : [];

	let maxItems = array.length;
	let startItem = 0;

	for (startItem; startItem < maxItems; startItem++) {
	  if (array[startItem] == target) {
		return startItem;
	  }
	}
	return 'Not Found';
  }
}

const SEARCH_LINEAR = new LinearSearch([1,2, 3, 4,45,6 ])
console.log(SEARCH_LINEAR.indexOf(2));