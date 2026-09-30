import { configurarFormulario } from "./formulario.js";


const rotas = {

    inicio: `
        <section>
            <h2>Sobre a Amigo dos Animais</h2>
            <p>
                A Amigo dos Animais atua na proteção e no bem-estar
                de animais abandonados ou em situação de vulnerabilidade.
            </p>
        </section>

        <section>
            <h2>Nossa missão</h2>
            <p>
                Promover a proteção, o cuidado e o bem-estar dos animais,
                incentivando o respeito e a adoção responsável.
            </p>
        </section>

        <section class="secao-trabalho">
            <h2>Conheça nosso trabalho</h2>
            <img src="../imagens/animais.jpg" alt="Animais acolhidos pela ONG Amigo dos Animais">
            <p>
                Conheça nossas ações de proteção e cuidado com os animais.
            </p>
        </section>
    `,


    projetos: `
        <section>
            <h2>Apresentação dos Projetos</h2>
            <p>
                Conheça as principais iniciativas da Amigo dos Animais
                voltadas à proteção, ao cuidado e ao bem-estar animal.
            </p>
        </section>

        <section>
            <h2>Projetos Sociais</h2>

            <article id="resgate">
                <span class="badge badge-verde">Resgate</span>
                <h3>Resgate e Acolhimento</h3>
                <p>
                    Realizamos o resgate e oferecemos cuidados básicos
                    aos animais que precisam de proteção e acolhimento.
                </p>
            </article>

            <article id="adocao">
                <span class="badge badge-laranja">Adoção</span>
                <h3>Adoção Responsável</h3>
                <p>
                    Incentivamos a adoção responsável, buscando novos lares
                    para os animais acolhidos.
                </p>
            </article>

            <article id="castracao">
                <span class="badge badge-verde">Cuidado animal</span>
                <h3>Campanha de Castração</h3>
                <p>
                    Promovemos ações de conscientização sobre a importância
                    da castração para o controle populacional dos animais.
                </p>
            </article>

            <article id="alimentos">
                <span class="badge badge-laranja">Doação</span>
                <h3>Arrecadação de Alimentos</h3>
                <p>
                    Recebemos doações de alimentos para auxiliar na alimentação
                    dos animais acolhidos.
                </p>
            </article>
        </section>

        <section>
            <h2>Voluntariado</h2>
            <p>
                Pessoas interessadas podem contribuir como voluntárias,
                ajudando nas ações de cuidado, proteção e conscientização
                realizadas pela ONG.
            </p>
        </section>

        <section>
            <h2>Doações</h2>
            <p>
                As doações ajudam a manter os cuidados com os animais acolhidos
                e contribuem para a realização das ações da ONG.
            </p>
        </section>

        <section>
            <h2>Informações</h2>

            <div class="alert alert-sucesso">
                <strong>Projeto ativo:</strong>
                o projeto de resgate está recebendo novos animais.
            </div>

            <div class="alert alert-info">
                <strong>Informação:</strong>
                interessados em participar podem realizar o cadastro como voluntários.
            </div>

            <div class="alert alert-aviso">
                <strong>Atenção:</strong>
                verifique as orientações antes de realizar uma doação.
            </div>

            <p>
                <button type="button" id="mostrarToast">
                    Testar mensagem
                </button>
            </p>

<div
    class="toast"
    id="toast"
    role="status"
    aria-live="polite">
    <strong>Mensagem enviada!</strong>
    Sua solicitação foi registrada com sucesso.
</div>
        </section>
    `,


    cadastro: `
        <section>
            <h2>Cadastre-se</h2>

            <p>
                Preencha seus dados caso demonstre interesse
                em participar das ações da ONG Amigo dos Animais.
            </p>
        </section>

        <form>

            <fieldset>
                <legend>Dados pessoais</legend>

                <p>
                    <label for="nome">Nome completo:</label>
                    <input type="text" id="nome" name="nome" required>
                </p>

                <p>
                    <label for="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        required>
                </p>

                <p>
                    <label for="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required>
                </p>

                <p>
                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(91) 99999-9999"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        required>
                </p>

                <p>
                    <label for="nascimento">Data de nascimento:</label>
                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        required>
                </p>

            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <p>
                    <label for="cep">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="66000-000"
                        pattern="[0-9]{5}-[0-9]{3}"
                        required>
                </p>

                <p>
                    <label for="endereco">Endereço:</label>
                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        required>
                </p>

                <p>
                    <label for="cidade">Cidade:</label>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        required>
                </p>

                <p>
                    <label for="estado">Estado:</label>
                    <input
                        type="text"
                        id="estado"
                        name="estado"
                        required>
                </p>

            </fieldset>

            <p>
                <button type="submit">Enviar cadastro</button>
            </p>

        </form>
    `
};


export function navegar(rota) {

    const app = document.querySelector("#app");

    if (app && rotas[rota]) {

        app.innerHTML = rotas[rota];

        configurarFormulario();


        // Toast
        const botaoToast = document.querySelector("#mostrarToast");
        const toast = document.querySelector("#toast");

        if (botaoToast && toast) {

            botaoToast.addEventListener("click", function () {

                toast.classList.add("toast-visivel");

                setTimeout(function () {
                    toast.classList.remove("toast-visivel");
                }, 3000);

            });

        }

    }

}