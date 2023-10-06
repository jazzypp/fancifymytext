function helloWorld() {
    alert("Hello, world!");
}

function makeBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function styleChange() {
    let textArea = document.getElementById("userText");

    if(document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight= "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].split(" ");
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(".");
}