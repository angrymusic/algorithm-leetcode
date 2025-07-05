function solution(input) {
  class MinHeap {
    heap = [];

    getLeftIndex(i) {
      return 2 * i + 1;
    }
    getRightIndex(i) {
      return 2 * i + 2;
    }
    getParentIndex(i) {
      return Math.floor((i - 1) / 2);
    }

    swap(a, b) {
      const temp = this.heap[a];
      this.heap[a] = this.heap[b];
      this.heap[b] = temp;
    }

    push(val) {
      this.heap.push(val);
      this.heapifyUp();
    }

    pop() {
      if (this.heap.length === 0) return 0;
      if (this.heap.length === 1) return this.heap.pop();

      const last = this.heap.length - 1;
      this.swap(0, last);

      const min = this.heap.pop();

      this.heapifyDown();

      return min;
    }

    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = this.getParentIndex(index);

        if (this.heap[parentIndex] > this.heap[index]) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else break;
      }
    }

    heapifyDown() {
      let index = 0;

      while (this.getLeftIndex(index) < this.heap.length) {
        const leftChildIndex = this.getLeftIndex(index);
        const rightChildIndex = this.getRightIndex(index);

        let littleChildIndex = leftChildIndex;

        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] < this.heap[leftChildIndex]
        ) {
          littleChildIndex = rightChildIndex;
        }

        if (this.heap[littleChildIndex] >= this.heap[index]) break;

        this.swap(index, littleChildIndex);
        index = littleChildIndex;
      }
    }
  }

  const minHeap = new MinHeap();
  const result = [];

  input.slice(1).forEach((_n) => {
    const n = +_n; // 빠른 파싱
    if (n === 0) {
      result.push(minHeap.pop());
    } else {
      minHeap.push(n);
    }
  });

  console.log(result.join("\n"));
}

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line); // 한 줄씩 입력을 배열에 저장
}).on("close", function () {
  solution(input); // 모든 입력을 받은 후 solution 호출
  process.exit();
});
