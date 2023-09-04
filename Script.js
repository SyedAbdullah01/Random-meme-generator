// Function to clear the content of all sections
function clearAll() {
  // Clear the content of various content sections
  let memeDiv = (document.getElementsByClassName("meme-content")[0].innerHTML =
    "");
  let jokeDiv = (document.getElementsByClassName("joke-content")[0].innerHTML =
    "");
  let quoteDiv = (document.getElementsByClassName(
    "quote-content"
  )[0].innerHTML = "");
  let riddleDiv = (document.getElementsByClassName(
    "riddle-content"
  )[0].innerHTML = "");
}

// Function to display a random meme
function showMeme() {
  clearAll(); // Clear all sections
  let div = document.getElementsByClassName("meme-content")[0];
  let meme = document.createElement("img");
  meme.setAttribute("src", randomMeme());
  div.appendChild(meme);
}

// Function to display a random joke
function showJoke() {
  clearAll(); // Clear all sections
  let div = document.getElementsByClassName("joke-content")[0];
  let joke = document.createElement("p");
  joke.innerText = randomJoke();
  div.appendChild(joke);
}

// Function to display a random quote
function showQuote() {
  clearAll(); // Clear all sections
  let quoteFunction = randomQuote();
  let div = document.getElementsByClassName("quote-content")[0];
  let quote = document.createElement("p");
  let author = document.createElement("p");
  quote.innerText = quoteFunction.quote;
  author.innerText = "-" + quoteFunction.author;
  div.appendChild(quote);
  div.appendChild(author);
}

// Function to display a random riddle
function showRiddle() {
  clearAll(); // Clear all sections
  let riddleFunction = randomRiddle();
  let div = document.getElementsByClassName("riddle-content")[0];
  let question = document.createElement("p");
  let answer = document.createElement("p");
  question.innerText = riddleFunction.question;
  answer.innerText = riddleFunction.answer;
  div.appendChild(question);
  div.appendChild(answer);
  answer.hidden = true; // Hide the answer initially
}

// Function to reveal the answer to a riddle
function revealAnswer() {
  let div = document.getElementsByClassName("riddle-content")[0];
  let riddle = div.getElementsByTagName("p")[0];
  let answer = div.getElementsByTagName("p")[1];

  if (!riddle) {
    alert("There is no riddle to reveal the answer to");
  } else if (!answer.hidden) {
    alert("The answer to the riddle is already revealed");
  } else {
    answer.hidden = false; // Unhide the answer
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

// An array of meme URLs
let memeArray = [
  "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33beaa2121c403e729f3e_cFdC0T4-nFznndnWBG6Dx4sbRY_jGLBvCSq6BM_uXkJ_n3nL4pKSC_RPSlnAbDYDw0U_BNjM_mftxXGf0dwoRTp1vB5HWk1TJR6U-69iJLAugpxpnzRgXpxfI4Tr1talrjrJg0AP.png",
  "https://static.demilked.com/wp-content/uploads/2021/08/6124975980d6b-611f93ed7c426_dd858tcec5w61__700.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Jokes-Coding-Error-1024x860.jpg",
  "https://i.redd.it/a0v87gwzoge61.jpg",
  "https://i.redd.it/q29egav34ee61.jpg",
  "https://i.redd.it/iij16swxjie61.jpg",
  "https://i.redd.it/vek7dm2hrge61.jpg",
  "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
  "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png",
  "https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg",
  "https://code-love.com/wp-content/uploads/2019/03/download.jpeg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg"
];

// An array of jokes
let jokeArray = [
  "This statement",
  "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "All programmers are playwrights, and all computers are lousy actors.",
  "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
  "The generation of random numbers is too important to be left to chance.",
  "Debugging: Removing the needles from the haystack.",
  "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
  "There are two ways to write error-free programs; only the third one works.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit."
];

// An array of quotes with authors
let quoteArray = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson"
  },
  {
    quote:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Rick Cook"
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    author: "John Woods"
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  },
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin"
  },
  {
    quote:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: "Larry Niven"
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs"
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis"
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay"
  },
  {
    quote:
      "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
    author: "Joseph Weizenbaum"
  },
  {
    quote:
      "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    author: "Brian Kernighan"
  },
  {
    quote:
      "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    author: "Ram Ray"
  }
];

// An array of riddles with questions and answers
let riddleArray = [
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo"
  },
  {
    question:
      "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
    answer: "A Candle"
  },
  {
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map"
  },
  {
    question:
      "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer: 'The letter "R"'
  },
  {
    question:
      "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
    answer: "All the people were married"
  },
  {
    question:
      "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
    answer: "Heroine"
  }
];
