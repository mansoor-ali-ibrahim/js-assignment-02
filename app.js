/*
    Mansoor Ali Ibrahim
    JavaScript Crash Course
    Assignment # 2
    JS-124461
*/

/*
    Question # 1. Write a function that creates a closure and returns a function that can add
    a specific number to any number passed to it. For example, if the closure is
    created with 5, the returned function should add 5 to any number passed
    to it.
*/

console.log("Question # 1");
function closureFunction(val1){
    return function(val2){
        return val2 + val1;
    }
}
let closureFunctioncall = closureFunction(5);
console.log(closureFunctioncall(15));



/* ----------------------------------------------------- */


/*
    Question # 2. Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.
*/

console.log("Question # 2");

const tempArray = [3, 10, 18, 20, 30, 40, 50, 60, 70];

function searchArray(arrayName, valueTofind) {
    if (arrayName.length === 0) {
        return false;
        // end the function call if the array lenght is zero.
    }
       
    // This can also work if we give condition if(arrayName[0] === valueTofind)
    // Because We just have to check the First Value if it does nat match condition will not meet
    // and it will goto else and run the recursive function call in which we have sliced the first value from the array
    // so when the function runs again it will have one less value
    if (arrayName.find(element => element === valueTofind)) { 
        
        //console.log("Value Found");
        return true;
        // return true it the value is found, Finally Shukar.
    } 
    else {
        return searchArray(arrayName.slice(1), valueTofind); 
        //recursive calling the function again , this will remove the first value from the Array.
    }
}

let valueFind1 = searchArray(tempArray, 30);
console.log("Condition met and the result is " + valueFind1); // This Will Return True
let valueFind2 = searchArray(tempArray, 33);
console.log("Variable not found in the array and the result is " + valueFind2); // This Will Return True



/* ----------------------------------------------------- */


/*
    Question # 3. Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.
*/


function addParagraph(val1){
    let newParagraph = document.createElement('p'); //Create a new paragraph element
    let newText = document.createTextNode(val1); // Create a new text node with the value from the function call
    newParagraph.appendChild(newText); // Append the text to the new paragraph created
    document.body.appendChild(newParagraph); // Add the new paragraph to the html document 
}

addParagraph("Question # 3 , This is a new paragraph added automatically by javascript by using a Function");


/* ----------------------------------------------------- */



/*
    Question # 4. Write a function that adds a new list item to an unordered list in an HTML
    document. The function should take a string argument that will be used as
    the text content of the new list item.
*/


function addListitem(val2){
    let newListitem = document.createElement('li'); //Create the new list item
    let newText = document.createTextNode(val2); //Create a new text node with the value from the function call
    newListitem.appendChild(newText); // Append the new text node to the list item
    let parentList = document.querySelector('#question4'); // Get the parent list selector
    parentList.appendChild(newListitem); // Add the new list item to the parent list
}

addListitem("Question # 4 , This is a new list item added automatically by javascript by using a Function");



/* ----------------------------------------------------- */



/*
    Question # 5. Write a function that changes the background color of an HTML element.
    The function should take two arguments: the first argument is a reference
    to the HTML element, and the second argument is a string representing
    the new background color.
*/

function setBackgroundColor(element, newBackgroundColor){
    let parentElement = document.querySelector(element); // get the parent element
    parentElement.style.backgroundColor = newBackgroundColor; // set the new background color
}
document.getElementById("changeColor").addEventListener("click", function() {
    setBackgroundColor(".question5", "#000");
  });



/* ----------------------------------------------------- */


/*
    Question # 6. Write a function that saves an object to localStorage. The function should
    take two arguments: the first argument is a string representing the key to
    use for storing the object, and the second argument is the object to store.
*/

function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
const tempObject = [3, 10, 18, 20, 30, 40, 50, 60, 70];
saveToLocalStorage("justaKeyName", tempObject);



/* ----------------------------------------------------- */


/*
    Question # 7. Write a function that retrieves an object from localStorage. The function
    should take one argument, which is a string representing the key used to
    store the object. The function should return the object.
*/


console.log("Question # 7");
function getObjFromLocalStorage(key) {
    let prevObject = localStorage.getItem(key);
    if (prevObject) {
      return JSON.parse(prevObject);
    } else {
      return "not found";
    }
  }

  let objRetuned = getObjFromLocalStorage("justaKeyName");
  console.log(objRetuned);



/* ----------------------------------------------------- */


/*
    Question # 8. Write a function that takes an object and saves each property to
    localStorage using the property name as the key and the property value as
    the value. The function should also retrieve the object from localStorage
    and return it as a new object.
*/

console.log("Question # 8");
function saveObjToLocalStorage(obj) {
    // save each property to localStorage
    for (let propt in obj) {
      localStorage.setItem(propt, obj[propt]);
    }
  
    // retrieve the object from localStorage and return it
    let newObj = {};
    for (let propt in obj) {
      newObj[propt] = localStorage.getItem(propt);
    }
    return newObj;
  }

let myObj = {
    name: "Fareed",
    age: 30,
    city: "Karachi",
    language: "Urdu",
};
let newObj = saveObjToLocalStorage(myObj);
console.log(newObj);