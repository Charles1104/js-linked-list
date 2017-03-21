/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  function node(value) {
    var next = null;
    return {
      value,
      next
    };
  }

  var head = null;
  var tail = null;


  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }

  function add(value){
    if (head === null){
      tail = node(value);
      head = tail;
    }

    else {
      tail.next = node(value);
      tail = tail.next;
    }

    return tail;
  }

  function get(number){

  var current = 0;
  var currentNode = head;

    if (head === null){
      return false;
    }

    while (current !== number){

      if(currentNode.next === null){
        return false;
      }
      else{
        currentNode = currentNode.next;
      }

    current ++;
    }

  return currentNode;

  }

  function remove(number){

  var currentNode = get(number);
  var previousNode = get(number - 1);

  if (currentNode === false) {
    return false;
  }

  if (number === 0) {
    head = currentNode.next;
  }

  if (currentNode.next === null) {
    tail = previousNode;
    previousNode.next = currentNode.next;
  }

  else {
  previousNode.next = currentNode.next;
  }

  }

  function insert(value, number){

    var currentNode = get(number - 1);
    var nextNode = get(number + 1);
    var nextHead = head.next;


    if (number === 0) {
    head = node(value);
    head.next = nextHead;
    console.log("head");
    console.log(head.next);
    }


    else {
      currentNode.next = node(value);
      currentNode.next.next = nextNode;
    }

  }

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };


}

var animals = linkedListGenerator();
animals.add("cat");
animals.add("dog");
animals.add("lion");

console.log(animals.insert("elephant",0));

