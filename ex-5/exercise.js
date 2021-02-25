// Example
var word = prompt("Can you write a word or a sentence")

window.alert(word+ " is " + word.length + " characters long.")

window.alert("let us do that with 2 word")

var word1 = prompt("Please write the first word" )
var word2 = prompt("Please write the second word ")

if (word1.length > word2.length){
    alert(word1 + " word is longest than " + word2.length + " characters long ")
} else if (word2.length > word1.length){
    alert(word2 + " word is longer than " + word1.length + " characters long ")
} else {
    alert("Both word have an equal number of characters")
}