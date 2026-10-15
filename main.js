/* Foi usado IA para gerar o Index.html e Styles.css, o main.js eu fiz a mão e a única coisa que a IA
gerou foi as linhas 27 até a 29*/

function calcular(){
    var valorCompra = parseFloat(document.getElementById("valorCompra").value);
    var desconto = 0;
    var valorFinal = 0;

    if (valorCompra > 2008){
        desconto = valorCompra * 0.10;
        valorFinal = valorCompra - desconto;
        console.log("Total a pagar: R$ " + valorFinal);
    }

    else if (valorCompra >= 100){
        desconto = valorCompra *0.05;
        valorFinal = valorCompra - desconto;
        console.log("Total a pagar: R$ " + valorFinal);
    }

    else {
        desconto = 0;
        valorFinal = valorCompra;
        console.log("Total a pagar: R$ " + valorFinal);
    }

    document.getElementById("resDesconto").textContent = desconto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    document.getElementById("resTotal").textContent = valorFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    document.getElementById("resultado").hidden = false;
}