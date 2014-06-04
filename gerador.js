var tabela = [
    ['A miséria', 'A inflação', 'O Golpe de 1964', 'A violência', 'A crise', 'O crime', 'O racismo', 'O machismo', 'O problema da fome', 'A corrupção'],
    ['é uma invenção', 'é uma estratégia', 'é uma manobra', 'é um complô', 'é culpa', 'é uma criação', 'é uma conspiração', 'é uma forma orquestrada', 'é a doutrinação ideológica', 'é uma articulação'],
    ['do PSDB', 'do capitalismo', 'dos reaças', 'do Serra', 'da "herança maldita"', 'dos religiosos', 'do homem branco hétero classe média', 'da direita', 'dos homofóbicos', 'da Raquel Sheherazade'],
    ['para deslegitimar', 'para vandalizar', 'para demoralizar', 'para destruir', 'para regular', 'para ameaçar', 'para superar', 'para roubar', 'para aterrorizar', 'para transgredir'],
    ['o PT', 'os nordetisnos', 'a classe popular', 'a propriedade do estado', 'a Dilma', 'o Lula', 'os direitos das minorias', 'a democracia', 'a liberdade', 'o ótimo trabalho do governo atual']
];


function gerar(paragrafos, linhas) {
    var texto = '';

    for (var p = 0; p < paragrafos; p++) {

        for (var l = 0; l < linhas; l++) {

            for (var j = 0; j < 5; j++) {
                //sortear uma linha entre 0 e 9 para compor a coluna.
                var i = parseInt(Math.random() * 100) % 10;

                texto += tabela[j][i] + ' ';
            }
            
            texto = texto.slice(0, texto.length - 1) +  '. ';
        }

        texto += '\n\n';
    }

    return texto;
}
