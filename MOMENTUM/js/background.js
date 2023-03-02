const images = ["0.jpg", "1.jpg", "2.jpg"];

const chooseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// html에 img element를 추가

bgImage.src = `img/${chooseImage}`;

document.body.appendChild(bgImage);
//append -> 가장 뒤에 추가
//prepend -> 가장 앞에 추가