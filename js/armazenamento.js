export function salvarCadastro(dadosCadastro) {
    localStorage.setItem(
        "cadastro",
        JSON.stringify(dadosCadastro)
    );
}

export function recuperarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastro");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return null;
}