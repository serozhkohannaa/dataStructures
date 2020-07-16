class qNode {
  constructor(
	public value: number,
	public next?: qNode
  ) {
  }
}

class queue {
  constructor(
	public head?: qNode,
	public tail?: qNode
  ) {
  }

  public pop = (): number | void => {
	if (this.head) {
	  let tempOut: qNode | undefined = this.tail
	  this.tail = this.tail?.next
	  return tempOut?.value
	} else {
	  console.log("queue is empty")
	}
  }
  public insert = (node: qNode): void => {
	if (this.head) {
	  this.head.next = node
	  this.head = node
	} else {
	  this.head = node
	  this.tail = node
	}
  }
}