class StackDataStructure<T> {
  private stack: T[];
  private length: number;
  private readonly maxSize: number;
  private readonly minSize: number = 1;

  public constructor(maxSize: number) {
	this.length = 0;
	this.maxSize = maxSize > 0 ? maxSize : this.minSize;
	this.stack = new Array<T>(this.maxSize);
  }

  public isEmpty(): boolean {
	return this.length === 0;
  }

  public isFull(): boolean {
	return this.length === this.maxSize;
  }

  public push(pushItem: T): void {
	if (this.isFull()) {
	  console.log('Max size is reached')
	}

	this.stack[this.length++] = pushItem;
  }

  public pop(): T {
	if (this.isEmpty()) {
	  console.log('The stack is empty')
	}

	const poppedItem = this.stack[--this.length];
	return poppedItem;
  }

  public top(): T {
	if (this.isEmpty()) {
	  console.log('The stack is empty')
	}

	return this.stack[this.length - 1];
  }

  public stackContents(): void {
	console.log(`Stack content, amount ${this.length}`);
	this.length !== 0 && this.stack.forEach((item, i) => console.log(`was entered: ${i}, itemValue: ${item}`))
  }
}

const STACK = new StackDataStructure<number>(10);

while (!STACK.isFull()) {
  STACK.push(Math.round(Math.random() * 100));
}
STACK.stackContents();

console.log('--------------')
console.log(STACK.top());

console.log('--------------')
while (!STACK.isEmpty()) {
  console.log(`was removed: ${length++}, itemValue: ${STACK.pop()} `);
}
STACK.stackContents();

