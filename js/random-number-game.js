const rangeInput = document.querySelector("#range-form input");
const guessNumber = document.querySelector("#guess-form input");
const playBtn = document.querySelector("#play-btn");
const resultTitle = document.querySelector("#result h3");
const resultSubtitle = document.querySelector("#result span");

function randomNumber() {
  const maxNumber = rangeInput.value;
  return Math.round(Math.random() * maxNumber);
}

function log(event) {
  event.preventDefault();
  const gameNumber = randomNumber();
  const myNumber = parseInt(guessNumber.value, 10);
  if (gameNumber < 0 || myNumber < 0) {
    resultTitle.innerText = `Please enter an integer. | 정수를 입력해주세요.`;
  } else {
    resultSubtitle.innerText = `You chose(당신의 선택): ${myNumber}, the machine chose(랜덤 숫자): ${gameNumber}.`;
    if (myNumber === gameNumber) {
      resultTitle.innerText = `You won! 이겼습니다!`;
    } else {
      resultTitle.innerText = `You lost! 졌습니다!`;
    }
  }
}

playBtn.addEventListener("click", log);
