let thi = document.getElementById("thi");
let ask = prompt("tezlik (necha sekund yo milisekund)")
let password = document.getElementById("password");
let intervalId;


password.addEventListener("input", () => {
  interva = setInterval(() => {
    let b = Math.round(Math.random() * 1000);
    if (b == password.value) {
      clearInterval(intervalId);
      thi.innerText = `Siz kiritgan son bu: ${b}`;
    }
  }, ask);
});