const clock = document.querySelector("span#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} 시 ${minutes} 분 ${seconds} 초`;
}
//padstart -> string 앞줄에 0을 추가함 위에선 길이가 2가 아니면 앞에 0이 나옴

getClock();
setInterval(getClock, 1000);
