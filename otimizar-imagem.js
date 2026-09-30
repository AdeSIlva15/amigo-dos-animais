const sharp = require("sharp");

sharp("imagens/animais.jpg")
    .jpeg({
        quality: 75,
        mozjpeg: true
    })
    .toFile("imagens/animais-otimizada.jpg")
    .then(() => {
        console.log("Imagem otimizada com sucesso!");
    })
    .catch((erro) => {
        console.error(erro);
    });