const submitButton = document.getElementById('submit')
const wordBox = document.getElementById('word-box')
const count = document.getElementById('count')

submitButton.addEventListener('click', () => {
    let wordCount
    const words = wordBox.value
    toArray = wordsToArray(words)
    checkedWords = checkNonWord(toArray)
    wordCount = checkedWords.length
    count.innerHTML = wordCount
})

const wordsToArray = (words) => {
    return words.trim().split(" ")
}

const checkNonWord = (words) => {
    checked = []
    for(let i = 0; i < words.length; i++) {
        if (words[i].length >= 1) {
            checked.push(words[i])
        }
    }
    return checked
}