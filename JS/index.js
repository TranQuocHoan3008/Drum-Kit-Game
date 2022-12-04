var numberOfButton = document.querySelectorAll(".drum").length; // 7
//sound

var i = 0;
while (i < numberOfButton) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        {
          var soundW = new Audio("sounds/crash.mp3");
          soundW.play();
        }
        break;
      case "a": {
        var soundA = new Audio("sounds/kick-bass.mp3");
        soundA.play();
      }
      case "s":
        {
          var soundS = new Audio("sounds/snare.mp3");
          soundS.play();
        }
        break;
      case "d":
        {
          var soundD = new Audio("sounds/tom-1.mp3");
          soundD.play();
        }
        break;
      case "j":
        {
          var soundJ = new Audio("sounds/tom-2.mp3");
          soundJ.play();
        }
        break;
      case "k":
        {
          var soundK = new Audio("sounds/tom-3.mp3");
          soundK.play();
        }
        break;
      case "l":
        {
          var soundL = new Audio("sounds/tom-4.mp3");
          soundL.play();
        }
        break;
      default:
        console.log(this.innerHTML);
    }
  }); // max = 6 + 1 = 7 chay tiep vong for
  i++;
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
});

function makeSound(key)
{
  
  switch (key) {
    case "w":
      {
        var soundW = new Audio("sounds/crash.mp3");
        soundW.play();
      }
      break;
    case "a": {
      var soundA = new Audio("sounds/kick-bass.mp3");
      soundA.play();
    }
    case "s":
      {
        var soundS = new Audio("sounds/snare.mp3");
        soundS.play();
      }
      break;
    case "d":
      {
        var soundD = new Audio("sounds/tom-1.mp3");
        soundD.play();
      }
      break;
    case "j":
      {
        var soundJ = new Audio("sounds/tom-2.mp3");
        soundJ.play();
      }
      break;
    case "k":
      {
        var soundK = new Audio("sounds/tom-3.mp3");
        soundK.play();
      }
      break;
    case "l":
      {
        var soundL = new Audio("sounds/tom-4.mp3");
        soundL.play();
      }
      break;
    default:
      console.log(this.innerHTML);
  }
}

