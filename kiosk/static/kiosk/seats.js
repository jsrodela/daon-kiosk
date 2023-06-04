let seats = document.querySelectorAll('.seat')
let numpad = document.querySelector('#numpad')

for (let seat of seats) {
  seat.addEventListener('click', function(event) {
    numpad.style = "display: block; animation: showNumpad 1s;";
  })
}