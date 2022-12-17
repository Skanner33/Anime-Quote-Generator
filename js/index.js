//const api
const API = "https://animechan.vercel.app/api/random";

const pagelist = document.getElementById("pagelist");

document.addEventListener("DOMContentLoaded", () => {
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

    //     //bind event listeners to the share, save and like buttons
    //     document.getElementById("quote-of-the-day").appendChild(quoteElement);
        
    //     document.getElementById("btn-share").addEventListener("click", () => {
    //         //code to share quotes
    //     });
    //     document.getElementById("btn-save").addEventListener("click", () => {
    //         //code to save quotes 
    //     });
    //     document.getElementById("btn-like").addEventListener("click", () => {
    //         //code to like quotes
    //     });
    //   });
  }
  //calls getQuote function 
  getQuote();

  //bind event listener to generate quote button
  document.getElementById('btn-generate').addEventListener('click', () => {
    //when button is clicked gets new quote
    getQuote();
  });
});
