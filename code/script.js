
function adicao(x, y){
    return x + y;
}

function subtracao(x, y){
    return x - y;
}

function multiplicacao(x, y){
    return x * y;
}

function divisao(x, y){
    if (y === 0){
        return "Erro: divisão por zero";
    }
    return x / y;
}

function porcent(x, y){
    let calc = (x*y) / 100
    return calc
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});s

function iniciarCalculadora() {

        conole.log("----------------\nOpções\n----------------");
        console.log("[1] adição");
        console.log("[2] subtração");
        console.log("[3] multiplicação");
        console.log("[4] divisão");
        console.log("[5] porcentagem")
        console.log("[6] sair\n");

        rl.question("Escolha uma opção:", function(escolha) {
            escolha = parseInt(escolha.trim());

            if (escolha === 6) {
                console.log("Encerrando a calculadora...");
                rl.close();
            } else if (isNaN(escolha) || escolha < 1 || escolha > 5) {
                console.log("Escolha inválida. Tente Novamente.");
                iniciarCalculadora();
            } else {
                rl.question("Digite o primeiro valor: ", function(num1) {
                    num1 = parseFloat(num1.trim());

                    rl.question("Digite o segundo valor: ", function(num2) {
                        num2 = parseFloat(num2.trim());

                        if (escolha === 1) {
                            console.log(`\nResultado: ${adicao(num1, num2)}`);
                        } else if (escolha === 2) {
                            console.log(`\nResultado: ${subtracao(num1, num2)}`);
                        } else if (escolha === 3) {
                            console.log(`\nResultado: ${multiplicacao(num1, num2)}`);
                        } else if (escolha === 4) {
                            console.log(`\nResultado: ${divisao(num1, num2)}`);
                        } else if (escolha === 5) {
                            console.log(`\nResultado: ${porcent(num1, num2)}`);
                        }
                        iniciarCalculadora();
                    });
                });
            }
        });
    }

iniciarCalculadora();
