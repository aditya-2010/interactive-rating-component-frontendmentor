"use strict";

const btnSubmit = document.querySelector(".submit");
const numbers = document.querySelector(".numbers");
const rate = document.querySelector(".rate");
const ratingTag = document.querySelector(".rating-tag");
const thankYou = document.querySelector(".thank-you");
const errorMsg = document.querySelector(".error-msg");

let userRating = 0;

numbers.addEventListener("click", (e) => {
  if (e.target.classList.contains("number")) {
    e.currentTarget.querySelectorAll(".number").forEach((num) => {
      num.classList.remove("number-active");
    });
    e.target.classList.add("number-active");
    userRating = e.target.textContent;
  }
});

btnSubmit.addEventListener("click", () => {
  if (userRating === 0) {
    numbers.classList.add("error");
    errorMsg.classList.remove("hidden");
    setTimeout(() => {
      numbers.classList.remove("error");
      errorMsg.classList.add("hidden");
    }, 3000);
  } else {
    rate.style.transform = "translateX(-100%)";
    rate.style.opacity = 0;
    thankYou.style.transform = "translateX(0%)";
    thankYou.style.opacity = 1;
    ratingTag.innerText = `You selected ${userRating} out of 5`;
  }
});
