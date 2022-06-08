const spy = ("chai");
const spies = ("chai-spies");


function receivesAFunction(callback) {
    
  callback();
}
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("this is a named function");
  };
}
function returnsAnAnonymousFunction(){
    return() =>("returns an anonymous function")
}