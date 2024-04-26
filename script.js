
const textInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");
const paragraph = document.createElement("p");
let reverseWord;
let original;

const alertMessage = () => {
  if (!textInput.value) {
    alert("Please input a value")
  }
}

const createParagraph = () => {
  result.appendChild(paragraph);
}

const inputWord = () => {
  original = textInput.value;
  paragraph.innerText = textInput.value.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  textInput.value = "";
}

const convertWord = () => {
  reverseWord = paragraph.innerText.split("").reverse().join("");
}

const checkPalindrome = () => {

  if (paragraph.innerText === reverseWord) {
    paragraph.innerText = `${original} is a palindrome`
  } else {
    paragraph.innerText = `${original} is not a palindrome`;
  }
}

button.addEventListener("click", () => {
  alertMessage()
  createParagraph()
  inputWord()
  convertWord()
  checkPalindrome()
})

