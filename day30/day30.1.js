// Task

// Character Count
// o Textarea
// o Button (Show the count)

function countChars() {
    let text = document.getElementById("text").value;
    let count = text.length;
    document.getElementById("result").innerText = "Total Characters: " + count;
}