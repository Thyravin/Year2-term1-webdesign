function countVotes(votes) {
    if (votes.length === 0) {
        return "There is not vote yet"
    }

    let a = 0
    let b = 0
    let c = 0

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === "A") a++
        else if (votes[i] === "B") b++
        else if (votes[i] === "C") c++
    }

    const max = Math.max(a, b, c)

    const winners = []
    if (a === max) winners.push("A")
    if (b === max) winners.push("B")
    if (c === max) winners.push("C")

    if (winners.length === 1) {
        return winners[0] + " is the winner"
    }
    return winners.join(" and ") + " are both winners"
}

console.log(countVotes(["A", "B", "A", "C", "A"]))
console.log(countVotes(["A", "B", "B", "C", "A"]))
console.log(countVotes([]))
