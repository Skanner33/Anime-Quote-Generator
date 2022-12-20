//const api
const API = "https://animechan.vercel.app/api/random";

const pagelist = document.getElementById("pagelist");

document.addEventListener("DOMContentLoaded", () => {
  //log in functionality
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    const form = document.getElementById("log-form");

    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });

  const loginBtn = document.getElementById("login-btn");
  const loginForm = document.getElementById("login-form");

  loginBtn.addEventListener("click", () => {
    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
    } else {
      loginForm.style.display = "none";
    }
  });

  //sign up functionality
  const bUtn = document.getElementById("BUTN");

  bUtn.addEventListener("click", () => {
    const form = document.getElementById("signup-form");

    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });

  const signupBtn = document.getElementById("signup-btn");
  const signupForm = document.getElementById("signup-form");

  signupBtn.addEventListener("click", () => {
    if (signupForm.style.display === "none") {
      signupForm.style.display = "block";
    } else {
      signupForm.style.display = "none";
    }
  });

  function getQuote() {
    //http request to API endpoint
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        //extract the quote, character and author
        const anime = data.anime;
        const character = data.character;
        const quote = data.quote;

        //create element to hold quote, character and author
        const quoteElement = document.createElement("p");
        quoteElement.innerHTML = `"${quote}" - ${anime} - ${character}`;

        //bind event listeners to the share, save and like buttons
        document.getElementById("quote-of-the-day").appendChild(quoteElement);
        
        const link = encodeURI(window.location.href);
const msg = encodeURIComponent('Hey, I found this article');
const title = encodeURIComponent('Article or Post Title Here');

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

const linkedIn = document.querySelector('.linkedin');
linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;

const reddit = document.querySelector('.reddit');
reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;
        //document.getElementById("btn-share").addEventListener("click", () => {
          //code to share quotes
        //});
        document.getElementById("btn-save").addEventListener("click", () => {
          //code to save quotes
          const quote = document.querySelector(
            "#quote-of-the-day p"
          ).textContent;

          localStorage.setItem("savedQuote", quote);
          console.log("Quote saved");
        });

        let likeCount = 0;

        document.getElementById("btn-like").addEventListener("click", () => {
          //code to like quotes
          likeCount++;
          console.log("Quote liked ${likeCount} times");

          document.getElementById("like-count").textContent = likeCount;
        });

        function copyToClipboard() {
          navigator.clipboard.writeText(quoteElement);
        }
        copyToClipboard("quoteElement")
      });
  }
  //calls getQuote function
  getQuote();

  //bind event listener to generate quote button
  document.getElementById("btn-generate").addEventListener("click", () => {
    //when button is clicked gets new quote
    getQuote();
  });
});
