class LinearSearch {
  array: string[];

  constructor(data) {
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

const SEARCH_LINEAR = new LinearSearch(['monday', 'tuesday', 'wednesday', 'thur', 'fr'])
console.log(SEARCH_LINEAR.indexOf('wednesday'));
