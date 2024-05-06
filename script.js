
const textInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");
let reverseWord;

const createParagraph = () => {
  const paragraph = document.createElement("p");
  result.appendChild(paragraph);
  return paragraph;
}

const originalInputWord = () => {
  let originalWord = textInput.value;
  return originalWord;
}

const inputWord = (paragraph) => {
  paragraph.innerText = textInput.value.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  textInput.value = "";
}

const convertWord = (paragraph) => {
  return reverseWord = paragraph.innerText.split("").reverse().join("");
}

const checkPalindrome = (paragraph, originalWord) => {
  if (paragraph.innerText === reverseWord) {
    paragraph.innerText = `${originalWord} is a palindrome`
  } else {
    paragraph.innerText = `${originalWord} is not a palindrome`;
  }
}

button.addEventListener("click", () => {

  if (!textInput.value) {
    alert("Please input a value")
  } else {
  const createdParagraph = createParagraph();
  const paintWord = originalInputWord();
  inputWord(createdParagraph)
  convertWord(createdParagraph)
  checkPalindrome(createdParagraph, paintWord)
  }
})

