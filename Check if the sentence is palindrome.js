function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
