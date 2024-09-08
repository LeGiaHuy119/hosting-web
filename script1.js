document.addEventListener('DOMContentLoaded', function() {
  var body = document.getElementById('body');
  var input = document.getElementById('colorInput');
  var button = document.getElementById('changeColorButton');
  var greeting = document.getElementById('greeting');

  button.onclick = function() {

      var color = input.value;

      body.style.backgroundColor = color;

      var name = input.value;

      var message = "Great, " + name + " is a beautiful color";

      greeting.textContent = message;
  }
});
