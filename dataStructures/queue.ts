class QueueDataStructure<T> {
  private queue: T[];
  private length: number; // number of elements currently in the queue
  private maxSize: number; // maximum number of elements queue can contain
  private minSize: number = 1;

  public constructor(maxSize) {
	this.maxSize = maxSize > 0 ? maxSize : this.minSize;
	this.length = 0;
	this.queue = new Array<T>(this.maxSize);
  }

  public isEmpty(): boolean {
	return this.length === 0;
  }

  public isFull(): boolean {
	return this.length === this.maxSize;
  }

  public enqueue(pushItem: T): void {
	if (this.isFull()) {
	  console.log('Max size is reached')
	} else {
	  this.queue[this.length++] = pushItem;
	}
  }

  public dequeue(): T {
	if (this.isEmpty()) {
	  console.log('The queue is empty')
	}

	const shiftItem = this.queue[0];

	this.queue.forEach((item, i) => {
	  this.queue[i] = this.queue[i + 1];
	})

	this.length--;

	return shiftItem;
  }

  public peek(): T {
	if (this.isEmpty()) {
	  throw new Error('Queue is empty');
	}
	return this.queue[0];
  }

  public queueContents(): void {
	console.log(`Queue content, amount ${this.length}`);
	this.length !== 0 && this.queue.forEach((item, i) => console.log(`was entered: ${i}, itemValue: ${item}`));
  }
}

//IMPLEMENTATION
const QUEUE = new QueueDataStructure<number>(10);

while (!QUEUE.isFull()) {
  QUEUE.enqueue(Math.round(Math.random() * 100));
}
QUEUE.queueContents();

console.log('--------------')
console.log(QUEUE.peek());

console.log('--------------')
while (!QUEUE.isEmpty()) {
  console.log(`was removed: ${length++}, itemValue: ${QUEUE.dequeue()} `);
}
QUEUE.queueContents();
