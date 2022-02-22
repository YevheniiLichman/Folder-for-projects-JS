window.onload = function () {
    var text1 = document.getElementById("massBody");
    var button = document.getElementById("mainButton");
    var text2 = document.getElementById("heightBody");
    var result = document.getElementById("result__item");
    button.onclick = function (event) {
        var mass = text1.value;
        var height = text2.value / 100;
        normal = mass / (height * height)
        if (!normal) {
            result.innerHTML += 'Спочатку заповніть відповідні поля.'
        }
        else {
            result.innerHTML = Math.round(normal)
            if (normal < 25) {
                result.innerHTML += ' - у вас нормальна вага'
            }
            else {
                if (normal > 30) {
                    result.innerHTML += ' - у вас ожиріння'
                }
                else {
                    result.innerHTML += ' - вважається надмірною масою тіла'
                }
            }
        }
    };
};