export class Node {
  private head;
  public data: number;
  public next: Node = null;

  constructor(data: number) {
    this.data = data;
    this.head = this;
  }

  addToTail(data: number): void {
    let newNode: Node = new Node(data)
    let current: Node = this;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // isDataInList(data: number): boolean {
  //   let current: Node = this.head;
  //   do {
  //     if (current.data === data) { return true; }
  //   } while (current.next !== null) {
  //     current = current.next;
  //   }
  //   return false;
  // }

  deleteNode(data: number): void {
    let current: Node = this.head;
    console.log("before", this)

    if (current.data === data) {
      current = current.next;
      return;
    }
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
      }
      else {
        current = current.next;
      }
    }
    console.log("after", this)
  }

  removeDuplicates(): void {
    let current: Node = this;
    let uniqueData = [];

    if (uniqueData.indexOf(current.data) === -1) {
      uniqueData.push(current.data);
      // Delete Node
      current = current.next;
    }
    while (current.next !== null) {
      if (uniqueData.indexOf(current.next.data) === -1) {
        current.next = current.next.next;
      }
      else {
        current = current.next;
      }
    }
  }
}

export default Node;