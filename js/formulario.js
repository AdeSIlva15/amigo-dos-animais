import { salvarCadastro, recuperarCadastro } from "./armazenamento.js";

export function configurarFormulario() {

    const formulario = document.querySelector("form");

    if (!formulario) {
        return;
    }


    // Validação dos campos
    const campos = document.querySelectorAll("input");

    campos.forEach(function (campo) {

        campo.addEventListener("blur", function () {
            campo.classList.add("verificado");
        });

    });


    // Salvar cadastro
    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const dadosCadastro = {
            nome: document.querySelector("#nome").value,
            cpf: document.querySelector("#cpf").value,
            email: document.querySelector("#email").value,
            telefone: document.querySelector("#telefone").value,
            nascimento: document.querySelector("#nascimento").value,
            cep: document.querySelector("#cep").value,
            endereco: document.querySelector("#endereco").value,
            cidade: document.querySelector("#cidade").value,
            estado: document.querySelector("#estado").value
        };

        salvarCadastro(dadosCadastro);

        alert("Cadastro salvo com sucesso!");

    });


    // Recuperar cadastro salvo
    const dadosCadastro = recuperarCadastro();

    if (dadosCadastro) {

        document.querySelector("#nome").value = dadosCadastro.nome;
        document.querySelector("#cpf").value = dadosCadastro.cpf;
        document.querySelector("#email").value = dadosCadastro.email;
        document.querySelector("#telefone").value = dadosCadastro.telefone;
        document.querySelector("#nascimento").value = dadosCadastro.nascimento;
        document.querySelector("#cep").value = dadosCadastro.cep;
        document.querySelector("#endereco").value = dadosCadastro.endereco;
        document.querySelector("#cidade").value = dadosCadastro.cidade;
        document.querySelector("#estado").value = dadosCadastro.estado;

    }

}