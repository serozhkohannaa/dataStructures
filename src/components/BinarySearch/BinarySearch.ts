export class BinarySearch {
  array: number[];

  constructor(numbers: number[]) {
	const sortedArray = [...numbers].sort((a, b) => a - b)
	this.array = sortedArray;
  }

  indexOf(target: number) {
	const array = this.array ? this.array : [];

	let startItem = 0;
	let maxItems = array.length;

	while (startItem <= maxItems) {
	  const middleValue= Math.floor((startItem + maxItems) / 2)

	  if (array[middleValue] === target) {
		return middleValue
	  } else if (array[middleValue] < target) {
		startItem = middleValue + 1
	  } else {
		maxItems = middleValue - 1
	  }
	}
	return 'Not found'
  }
}
