
var gameChoice = ["rock", "paper", "scissors"];
var counterUser = 0;
var counterPc = 0;
var click = 0
results = []
const containerMare = document.getElementById('mare')
const containerBtn = document.getElementById('btns')

function addEventForUser(type) {
  var btn = document.getElementById("btn-" + type);

  btn.addEventListener("click", function () {
    if (click < 5) {
      click++
      console.log(click)
      var randomChoiceIndex = Math.floor(Math.random() * 3);
      var pcChoice = gameChoice[randomChoiceIndex];
      var winner = document.createElement('h1')
      results.push(winner)
      winner.innerText = getResult(pcChoice, type)
      document.body.appendChild(winner)

      if (getResult(pcChoice, type) === "User win") {

        counterUser++
        var p1 = document.getElementById('p1')
        p1.innerText = "User wins : " + counterUser

      } else if (getResult(pcChoice, type) === "Pc win") {

        counterPc++
        var p2 = document.getElementById('p2')
        p2.innerText = counterPc + " :Pc wins"


      }

    } else {
      btn.disable = true;
      removeResults()
      createImg()
      finalResult()
    }
  });
}

addEventForUser("rock");
addEventForUser("paper");
addEventForUser("scissors");

function retry() {
  location.reload();
}

function getResult(pcChoice, userChoice) {

  switch (userChoice) {
    case "rock":
      switch (pcChoice) {
        case "rock":
          return "Draw";
        case "paper":
          return "Pc win";
        case "scissors":
          return "User win";
        default:
      }
      break;
    case "paper":
      switch (pcChoice) {
        case "rock":
          return "User win";
        case "paper":
          return "Draw";
        case "scissors":
          return "Pc win";
        default:
      }
      break;
    case "scissors":
      switch (pcChoice) {
        case "rock":
          return "Pc win";
        case "paper":
          return "User win";
        case "scissors":
          return "Draw";
        default:
      }
      break;
    default:
      break;
  }

}


function finalResult()
{
  if (counterUser > counterPc) {
    var finish = document.createElement('h1')
    finish.innerText = 'User has won .'
    document.body.appendChild(finish)
  } else if (counterUser < counterPc) {
    var finish = document.createElement('h1')
    finish.innerText = 'Pc has won .'
    document.body.appendChild(finish)
  } else if (counterUser == counterPc) {
    var finish = document.createElement('h1')
    finish.innerText = 'Perfect draw .'
    document.body.appendChild(finish)
  }
}
function createImg()
{
  const img = document.createElement('img')
  img.src = '/assets/retry.png'
  img.classList.add("retry-btn")
  img.addEventListener('click', retry)
  document.body.appendChild(img)
}
function removeResults()
{
  containerMare.removeChild(containerBtn)
  document.getElementById('h3').style.visibility = "hidden"
  results.forEach(e => document.body.removeChild(e));
}

var btnPlay = document.getElementById('btn-play')
btnPlay.addEventListener('click', function () {
  document.getElementById('btn-rock').style.visibility = "visible"
  document.getElementById('btn-paper').style.visibility = "visible"
  document.getElementById('btn-scissors').style.visibility = "visible"
  document.getElementById('btn-play').style.visibility = "hidden"
  document.getElementById('p1').style.visibility = "visible"
  document.getElementById('p2').style.visibility = "visible"
  document.getElementById('h3').style.visibility = "visible"

})

