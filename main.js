class qNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class queue {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
        this.pop = () => {
            var _a;
            if (this.head) {
                let tempOut = this.tail;
                this.tail = (_a = this.tail) === null || _a === void 0 ? void 0 : _a.next;
                return tempOut === null || tempOut === void 0 ? void 0 : tempOut.value;
            }
            else {
                console.log("queue is empty");
            }
        };
        this.insert = (node) => {
            if (this.head) {
                this.head.next = node;
                this.head = node;
            }
            else {
                this.head = node;
                this.tail = node;
            }
        };
    }
}
