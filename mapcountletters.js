let s = "aaabbbbcccccaaa";


function repeatedFunc(s) {
    let hasp = new Map;
    let newData = ""

    for (let i = 0; i < s.length; i++) {
        if (s[i] != s[i - 1]) {

            console.log(s[i + 1]);

            hasp.set(s[i + 1], 1)
            // if (hasp.has(s[i])) {
            //     hasp.set(s[i], hasp.get(s[i]) + 1)
            // } else {
            //     hasp.set(s[i], 1)
            // }
            continue;
        } else {
            // if (hasp.has(s[i])) {
            //     hasp.set(s[i], hasp.get(s[i]) + 1)
            // } else {
            //     hasp.set(s[i + 1], 1)
            // }
            hasp.set(s[i], hasp.get(s[i]) + 1)
        }


        newData = s[i] + Math.max(hasp.get(s[i]));
    }

    return hasp;
    return newData;

}

console.log(repeatedFunc(s))

