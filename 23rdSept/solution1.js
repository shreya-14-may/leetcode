var breakPalindrome = function (palindrome) {
    if (palindrome.length === 1) { return "" }

    const isPal = word => {
        for (let i = 0, j = word.length - 1; i < j; i++, j--) {
            if (word[i] !== word[j]) return false
        }
        return true;
    }

    let nonA = 0;
    while (palindrome[nonA] === 'a') nonA++;
    let check = palindrome.slice(0, nonA) + 'a' + palindrome.slice(nonA + 1);
    if (!isPal(check)) return check;
    else return palindrome.slice(0, palindrome.length - 1) + 'b'

};