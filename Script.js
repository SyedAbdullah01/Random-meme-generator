// Function to clear the content of all sections
function clearAll() {
    // Clear the content of the meme section
    let memeDiv = document.getElementsByClassName('meme-content')[0].innerHTML = '';
    // Clear the content of the joke section
    let jokeDiv = document.getElementsByClassName('joke-content')[0].innerHTML = '';
    // Clear the content of the quote section
    let quoteDiv = document.getElementsByClassName('quote-content')[0].innerHTML = '';
    // Clear the content of the riddle section
    let riddleDiv = document.getElementsByClassName('riddle-content')[0].innerHTML = '';
}

// Function to display a random meme
function showMeme() {
    // Clear all sections
    clearAll();
    // Get the meme content div
    let div = document.getElementsByClassName('meme-content')[0];
    // Create an image element for the meme
    let meme = document.createElement('img');
    // Set the image source to a random meme URL
    meme.setAttribute('src', randomMeme());
    // Append the image to the meme content div
    div.appendChild(meme);
}

// Function to display a random joke
function showJoke() {
    // Clear all sections
    clearAll();
    // Get the joke content div
    let div = document.getElementsByClassName('joke-content')[0];
    // Create a paragraph element for the joke
    let joke = document.createElement('p');
    // Set the text of the paragraph to a random joke
    joke.innerText = randomJoke();
    // Append the joke paragraph to the joke content div
    div.appendChild(joke);
}

// Function to display a random quote
function showQuote() {
    // Clear all sections
    clearAll();
    // Get a random quote from the quoteArray
    let quoteFunction = randomQuote();
    // Get the quote content div
    let div = document.getElementsByClassName('quote-content')[0];
    // Create a paragraph element for the quote
    let quote = document.createElement('p');
    // Create a paragraph element for the author
    let author = document.createElement('p');
    // Set the text of the quote paragraph to the quote text
    quote.innerText = quoteFunction.quote;
    // Set the text of the author paragraph with a "-" prefix
    author.innerText = "-" + quoteFunction.author;
    // Append both the quote and author paragraphs to the quote content div
    div.appendChild(quote);
    div.appendChild(author);
}

// Function to display a random riddle
function showRiddle() {
    // Clear all sections
    clearAll();
    // Get a random riddle from the riddleArray
    let riddleFunction = randomRiddle();
    // Get the riddle content div
    let div = document.getElementsByClassName('riddle-content')[0];
    // Create a paragraph element for the riddle question
    let question = document.createElement('p');
    // Create a paragraph element for the riddle answer
    let answer = document.createElement('p');
    // Set the text of the question paragraph to the riddle question
    question.innerText = riddleFunction.question;
    // Set the text of the answer paragraph to the riddle answer
    answer.innerText = riddleFunction.answer;
    // Append both the question and answer paragraphs to the riddle content div
    div.appendChild(question);
    div.appendChild(answer);
    // Hide the answer paragraph by default
    answer.hidden = true;
}

// Function to reveal the answer to a riddle
function revealAnswer() {
    // Get the riddle content div
    let div = document.getElementsByClassName("riddle-content")[0];
    // Get the question and answer paragraphs
    let riddle = div.getElementsByTagName('p')[0];
    let answer = div.getElementsByTagName('p')[1];

    // Check if there is no riddle to reveal the answer to
    if (!riddle) {
        alert('There is no riddle to reveal the answer to');
    }
    // Check if the answer is already revealed
    else if (!answer.hidden) {
        alert('The answer to the riddle is already revealed');
    }
    // If not, reveal the answer by unhiding the answer paragraph
    else {
        answer.hidden = false;
    }
}

// Random Functions to get random content
function randomMeme() {
    return memeArray[Math.floor(Math.random() * memeArray.length)];
}

function randomJoke() {
    return jokeArray[Math.floor(Math.random() * jokeArray.length)];
}

function randomQuote() {
    return quoteArray[Math.floor(Math.random() * quoteArray.length)];
}

function randomRiddle() {
    return riddleArray[Math.floor(Math.random() * riddleArray.length)];
}

// Arrays containing content
let memeArray = [...]; // An array of meme URLs
let jokeArray = [...]; // An array of jokes
let quoteArray = [...]; // An array of quotes with authors
let riddleArray = [...]; // An array of riddles with questions and answers
