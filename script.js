const content = document.querySelector(".content");
const startButton = document.querySelector(".btn_start");
const progressBarCounter = document.querySelector("#progressBar_counter");
const progress = document.querySelector(".progressBar_bar");
let currentQuestion = 0;

const questions = [
  {
    question: "Какой цвет Вам нравится?",
    answers: ["Красный", "Белый", "Синий", "Зелёный"],
  },
  {
    question: "2+2=4?",
    answers: ["Да", "Нет"],
  },
  {
    question:
      "Какой цвет нужно добавить к синему, чтобы получился зеленый цвет?",
    answers: ["жёлтый", "красный", "белый", "чёрный"],
  },
  {
    question:
      "Укажите вариант ответа, в котором во всех словах одного ряда пропущена безударная проверяемая гласная корня.",
    answers: [
      "кн..гиня, ижд..венец, пл..вник",
      "сп..ши (на урок), за..вить, ум..лять (о пощаде)",
      " к..лбаса, п..стила, предл..жение",
      " б..стион, к..вычки, в..нтиляция",
      "пом..рить (поссорившихся), зав..нтить, об..жал (синоним опечалил)",
    ],
  },
];

startButton.addEventListener("click", start);

function start() {
  document.querySelector(".progressBar").classList.remove("dn");
  mapQuestion();
}

function mapQuestion() {
  const title = document.createElement("p");
  const btnGroup = document.createElement("div");

  progressChange();
  content.innerHTML = "";

  title.classList.add("questionTitle");
  title.innerText = questions[currentQuestion].question;
  setTimeout(() => {
    title.style.opacity = 1;
  }, 100);

  content.appendChild(title);
  content.appendChild(btnGroup);

  btnGroup.classList.add("btnGroup");

  for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = questions[currentQuestion].answers[i];
    btn.style.transform = "translateY(20px)";
    btn.style.opacity = 0;
    setTimeout(() => {
      btn.style.opacity = 1;
      btn.style.transform = "none";
    }, 400 * i);
    btn.addEventListener("click", btnClick);
    btn.classList.add("btn", "btn_answer");
    btnGroup.appendChild(btn);
  }
}

function progressChange() {
  const stepPercent = (100 / questions.length) * currentQuestion + "%";
  progress.style.setProperty("--width", stepPercent);
  progressBarCounter.innerText = stepPercent;
}

function btnClick() {
  if (currentQuestion + 1 < questions.length) {
    currentQuestion++;
    mapQuestion();
  } else {
    content.innerHTML = "";
    currentQuestion++;
    progressChange();
    setTimeout(() => (window.location.href = "https://www.youtube.com"), 1500);
  }
}
