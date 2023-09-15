function saturdayFun(activity = "go shopping ") {
    return `This Saturday, I want to ${activity}!`;
  }
  // another function 
  const add = function (a, b) {
    return a + b;
  };
// Anonymous Function
const greet = function (name) {
    console.log(`Hello, ${name}!`);
  };
  //function expression 
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  //Function-Level Scope
  function calculate() {
    const x = 10; 
    return x * 2;
  }
  //Scope Chain
  function outer() {
    const outerVar = "I am from outer";
    
    function inner() {
      console.log(outerVar); 
    }
    
    inner();
  }
  //Closure
  function createCounter() {
    let count = 0; 
  
    return function () {
      return ++count; 
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  