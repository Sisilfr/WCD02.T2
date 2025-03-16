function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
