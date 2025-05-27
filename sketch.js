// Array de cores para o texto
let coresTexto = [
    [76, 0, 115],   // Roxo escuro
    [0, 100, 0],    // Verde escuro
    [153, 76, 0],   // Marrom escuro
    [0, 0, 153],    // Azul escuro
    [153, 0, 0]     // Vermelho escuro
];
let corAtualTextoIndex = 0;
let ultimaRecomendacao = ""; // Para saber se a recomendação mudou

function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "Invencível";
        } else {
            if (gostaDeFantasia) {
                return "Ms. Marvel (Kamala Khan)";
            } else {
                return "Superman: Entre a Foice e o Martelo";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "Homem-Aranha (clássico)";
        } else {
            return "Turma da Mônica Jovem";
        }
    }
}

function setup() {
    createCanvas(800, 400);

    createSpan("Sua idade: ");
    campoIdade = createInput("5");

    campoFantasia = createCheckbox(" Gosta de **HQs de super-heróis e fantasia**?");
}

function draw() {
    // Cor de fundo: Azul bem clarinho (RGB: 220, 230, 255)
    background(220, 230, 255);

    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    // Se a recomendação mudou, troca a cor do texto
    if (recomendacao !== ultimaRecomendacao) {
        corAtualTextoIndex = (corAtualTextoIndex + 1) % coresTexto.length;
        ultimaRecomendacao = recomendacao;
    }

    // Define a cor do texto usando o array de cores
    fill(color(coresTexto[corAtualTextoIndex][0], coresTexto[corAtualTextoIndex][1], coresTexto[corAtualTextoIndex][2]));

    textAlign(CENTER, CENTER);
    textSize(38);

    text(recomendacao, width / 2, height / 2);
}
