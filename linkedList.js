/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var listOfNodes = [];
  var node = {};


  function getHead(){
    return listOfNode[0];
  }

  function getTail(){
    return listOfNode[listOfNode.length - 1];
  }

  function add(Value){
    listOfNodes.push(Value);
    listOfNode[listOfNode.length - 2].next = Value;
    listOfNode[listOfNode.length - 1].next = Null;
  }

  function get(Number){

  }

  function remove(Number){

  }

  function insert(Value, Number){

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

var movies = linkedListGenerator();

