function makeSound(key) {
  switch (key) {
    case "w":
      var leftTom = new Audio("sounds/left-tom.mp3");
      leftTom.play();
      break;

    case "a":
      var rightTom = new Audio("sounds/right-tom.mp3");
      rightTom.play();
      break;

    case "s":
      var floorTom = new Audio('sounds/floor-tom.mp3');
      floorTom.play();
      break;

    case "d":
      // var hiHat = new Audio('sounds/hi-hat.mp3');
      // hiHat.play();
      var crash1 = new Audio('sounds/crash.mp3');
      crash1.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick.mp3');
      kick.play();
      break;

    default: 
      console.log(key);
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}


var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var key = this.innerHTML;
    makeSound(key);
    buttonAnimation(key);
  });
}

document.addEventListener("keypress", function(event) {
  // console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
});

