const quotes = [
  {
    quotes: "승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다.",
    author: "크리스티 메튜슨",
  },
  {
    quotes: "승자는 책임지는 태도로 살며, 패자는 약속을 남발한다.",
    author: "유태경전",
  },
  {
    quotes: "바람이 불지 않으면 노를 저어라.",
    author: "윈스턴 처칠",
  },
  {
    quotes: "들은 것은 잊어버리고, 본 것은 기억하고,직접 해 본 것은 이해한다.",
    author: "공자",
  },
  {
    quotes: "내 자신의 무식을 아는 것은 지식으로의 첫걸음이다.",
    author: "바이런",
  },
  {
    quotes:
      "절대 포기하지마라. 장벽에 부딪히거든, 그것이 절실함을 나에게 물어보는 장치에 불과하다는 것을 잊지마라.",
    author: "랜디 포시",
  },
  {
    quotes: "현재와 미래는 어떻게든 연결되어 있다.",
    author: "스티브 잡스",
  },
  {
    quotes:
      "시도해보지 않고는 누구도 자신이 얼마만큼 해낼 수 있는지 알지 못한다.",
    author: "푸블릴리우스 시루스",
  },
  {
    quotes:
      "성공을 위한 세 가지 열쇠는 이것이다. 첫째는 끈기, 둘째는 끈기, 셋째도 끈기",
    author: "이소룡",
  },
  {
    quotes:
      "성공의 커다란 비결은 결코 지치지 않는 인간으로 인생을 살아가는 것이다.",
    author: "알버트 슈바이처",
  },
]; //명언 10가지 배열

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// math.random()은 0과1사이의 랜덤값을 소수점까지 나타내므로
// math floor로 숫자를 내림 하였고 * 명언array의 길이만큼 곱해주었음

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
