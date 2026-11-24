function countWords(text) {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        const isSpace = ch === " " || ch === "\n" || ch === "\t" || ch === "\r";

        if (!isSpace && !inWord) {
            count++
            inWord = true
        } else if (isSpace) {
            inWord = false
        }
    }
    return count
}

console.log(countWords("hello world"))        
console.log(countWords("this is the best day"))
console.log(countWords("a bb ccc ddddddd e"))  
console.log(countWords(""))                     