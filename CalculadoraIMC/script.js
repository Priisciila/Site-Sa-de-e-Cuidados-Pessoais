function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    menu.classList.toggle("open");

    var menuIcon = document.querySelector(".icon");
    if (menu.classList.contains("open")) {
        menuIcon.src = "assets/img/close_white_36dp.svg"; // Mude para o ícone de fechar
    } else {
        menuIcon.src = "assets/img/menu_white_36dp.svg"; // Mude para o ícone de menu
    }
}

document.querySelectorAll('#mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        var menu = document.getElementById("mobile-menu");
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
        }
    });
});

function calcularIMC(event) {
    event.preventDefault();

    var peso = parseFloat(document.getElementById("peso").value);
    var alturaCm = parseFloat(document.getElementById("altura").value);
    var resultado = document.getElementById("resultado");

    if (peso <= 0 || alturaCm <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    var altura = alturaCm / 100;
    var imc = peso / (altura * altura);

    var categoria = '';

    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${categoria})`;
}
