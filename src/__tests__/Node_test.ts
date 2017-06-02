import Node from '../Node';
import { expect } from 'chai';
import 'mocha';


describe('Node class', () => {
  it('should create a new Node', () => {
    const result = new Node(4);

    expect(result.data).to.equal(4);
  });


  describe('"addToTail" function', () => {
    it('should add new Node to end of list and keep end of list null', () => {
      const newNode = new Node(4);
      newNode.addToTail(9);
      newNode.addToTail(7);


      expect(newNode.data).to.equal(4);
      expect(newNode.next.data).to.equal(9);
      expect(newNode.next.next.data).to.equal(7);
      expect(newNode.next.next.next).to.be.null;
    });
  });


  describe('"isDataInList" function', () => {
    // it('should return false if data is not in Node list', () => {
    //   const newNode = new Node(4);
    //   newNode.addToTail(9);
    //   newNode.addToTail(7);

    //   let result = newNode.isDataInList(6);

    //   expect(result).to.be.false;
    // });

    // it('should return true if data is in Node list', () => {
    //   const newNode = new Node(4);
    //   newNode.addToTail(9);
    //   newNode.addToTail(7);

    //   let result = newNode.isDataInList(9);

    //   expect(result).to.be.true;
    // });
  });


  describe('"deleteNode" function', () => {
    it('should not change Node if data is not in Node list', () => {
      const newNode = new Node(4);
      newNode.addToTail(9);
      newNode.addToTail(7);

      newNode.deleteNode(6);

      expect(newNode.data).to.equal(4);
      expect(newNode.next.data).to.equal(9);
      expect(newNode.next.next.data).to.equal(7);
      expect(newNode.next.next.next).to.be.null;
    });

    it('should remove Node if data is at head of Node list', () => {
      const newNode = new Node(4);
      newNode.addToTail(9);
      newNode.addToTail(7);

      newNode.deleteNode(4);

      expect(newNode.data).to.equal(9);
      expect(newNode.next.data).to.equal(7);
      expect(newNode.next.next).to.be.null;
    });

    it('should remove Node if data is at tail of Node list', () => {
      const newNode = new Node(4);
      newNode.addToTail(9);
      newNode.addToTail(7);

      newNode.deleteNode(7);

      expect(newNode.data).to.equal(4);
      expect(newNode.next.data).to.equal(9);
      expect(newNode.next.next).to.be.null;
    });

    it('should remove Node if data is in middle of Node list', () => {
      const newNode = new Node(4);
      newNode.addToTail(9);
      newNode.addToTail(7);

      newNode.deleteNode(9);

      expect(newNode.data).to.equal(4);
      expect(newNode.next.data).to.equal(7);
      expect(newNode.next.next).to.be.null;
    });
  });

  describe('"removeDuplicates" function', () => {
    it('should not change Node if data is not in Node list', () => {
      const newNode = new Node(4);
      newNode.addToTail(9);
      newNode.addToTail(7);
      newNode.addToTail(9);

      newNode.removeDuplicates();

      expect(newNode.data).to.equal(4);
      expect(newNode.next.data).to.equal(9);
      expect(newNode.next.next.data).to.equal(7);
      expect(newNode.next.next.next).to.be.null;
    });
  });
});