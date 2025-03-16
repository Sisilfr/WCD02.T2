function removeFirstOccurrence(str: string, searchString: string): string {
    return str.replace(searchString, '');
}

let string = "Hello world";
let searchString = "ell";
console.log(removeFirstOccurrence(string, searchString)); // Output: "Ho world"
