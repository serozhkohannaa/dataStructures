class QueueDataStructure {
    constructor(maxSize) {
        this.minSize = 1;
        this.maxSize = maxSize > 0 ? maxSize : this.minSize;
        this.length = 0;
        this.queue = new Array(this.maxSize);
    }
    isEmpty() {
        return this.length === 0;
    }
    isFull() {
        return this.length === this.maxSize;
    }
    enqueue(pushItem) {
        if (this.isFull()) {
            console.log('Max size is reached');
        }
        else {
            this.queue[this.length++] = pushItem;
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log('The queue is empty');
        }
        const shiftItem = this.queue[0];
        this.queue.forEach((item, i) => {
            this.queue[i] = this.queue[i + 1];
        });
        this.length--;
        return shiftItem;
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.queue[0];
    }
    queueContents() {
        console.log(`Queue content, amount ${this.length}`);
        this.length !== 0 && this.queue.forEach((item, i) => console.log(`was entered: ${i}, itemValue: ${item}`));
    }
}
//IMPLEMENTATION
const QUEUE = new QueueDataStructure(10);
while (!QUEUE.isFull()) {
    QUEUE.enqueue(Math.round(Math.random() * 100));
}
QUEUE.queueContents();
console.log('--------------');
console.log(QUEUE.peek());
console.log('--------------');
while (!QUEUE.isEmpty()) {
    console.log(`was removed: ${length++}, itemValue: ${QUEUE.dequeue()} `);
}
QUEUE.queueContents();
