const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author .name");
const speechBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");


function randomQuoteGenerator() {

    quoteBtn.innerText = "Loading New Quote";
    quoteBtn.classList.add("loading");
    //fetching a random api then parse it into a javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

speechBtn.addEventListener("click", () => {
    //speechSynthesisUtterance is web speech api used for speaking an information
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    
    navigator.clipboard.writeText(quoteText.innerText);
    
});

twitterBtn.addEventListener("click", () => {

    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuoteGenerator);