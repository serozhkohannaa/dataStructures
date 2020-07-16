class BinarySearch {
  array: number[]

  constructor(numbers: number[]) {
	const sortedArray = [...numbers].sort((a, b) => a - b)
	this.array = numbers;
  }

  indexOf(target: number) {
	const array = this.array ? this.array : []
	let low = 0
	let high = array.length
	while (low <= high) {
	  const mid = Math.floor((low + high) / 2)
	  if (array[mid] === target) {
		return mid
	  } else if (array[mid] < target) {
		low = mid + 1
	  } else {
		high = mid - 1
	  }
	}
	return -1
  }
}

const SEARCH = new BinarySearch([1, 3, 44, 5, 6, 3]);
console.log(SEARCH)
console.log(SEARCH.indexOf(5))