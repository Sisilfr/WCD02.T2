function removeFirstOccurrence(str, searchString) {
    return str.replace(searchString, '');
}

let string = "Hello world";
let searchString = "ell";
console.log(removeFirstOccurrence(string, searchString)); // Output: "Ho world"
