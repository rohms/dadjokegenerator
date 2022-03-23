import generateJoke from "./generateJoke";
import "./styles/main.scss";
import smiley2 from "./assets/smiley2.svg";

const laughImg = document.getElementById("laughImg");
laughImg.src = smiley2;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
