// const str = 'tdfdffddffsdsfffffsdsdsddddd';
let str = "aaabbbbcccccaaa";
const findConsecutiveCount = (str = '') => {
    let res = '';
    let count = 1;
    let arr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++
        } else {
            if (arr.every(v => v < count)) {
                res = str[i] + count
            }
            arr.push(count)
            count = 1
        }
    }
    return !res ? ['', 0] : [res.slice(0, 1), res.slice(1) * 1];
};
console.log(findConsecutiveCount(str));
