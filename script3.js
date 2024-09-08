document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('numberInput');
    var button = document.getElementById('generateButton');
    var table = document.getElementById('table');

    button.onclick = function() {
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        var number = input.value;

        for (var i = 1; i <= 10; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = number + ' x ' + i + ' = ' + (number * i);
            table.appendChild(listItem);
        }

        input.value = '';
    }
});