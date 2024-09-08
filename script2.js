document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('guessInput');
    var button = document.getElementById('guessButton');
    var result = document.getElementById('result');

    var randomNumber = Math.floor(Math.random() * 10) + 1;

    button.onclick = function() {
        var guess = input.value;

        if (guess > randomNumber) {
            result.textContent = 'Too high! Try again.';
        } else if (guess < randomNumber) {
            result.textContent = 'Too low! Try again.';
        } else {
            result.textContent = 'Congratulations! You guessed correctly.';
        }

        input.value = '';
    }
});

