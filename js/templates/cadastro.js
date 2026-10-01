export function cadastroTemplate() {
  return /* html */ `
    <section class="hero">
      <div class="container hero-conteudo">
        <span class="badge badge-ativo">
          Faça parte
        </span>
        <h1>
          Ajude a transformar histórias
        </h1>
        <p>
          Cadastre-se como doador, voluntário ou escolha as duas formas de participação.
        </p>
      </div>
    </section>
    <section class="secao" aria-labelledby="cadastro-titulo">
      <div class="container secao-cabecalho">
        <h2 id="cadastro-titulo">
          Cadastro de apoiadores
        </h2>
        <p>
          Os campos marcados como obrigatórios devem ser preenchidos antes do envio.
        </p>
      </div>
      <div class="grid-container">
        <form class="formulario col-8" id="formulario-cadastro" action="#" method="post" novalidate>
          <fieldset>
            <legend>
              Dados pessoais
            </legend>
            <div class="grupo-campos">
              <p class="campo">
                <label for="nome">
                  Nome completo
                </label>
                <input type="text" id="nome" name="nome" autocomplete="name" placeholder="Digite seu nome" required>
              </p>
              <p class="campo">
                <label for="cpf">
                  CPF
                </label>
                <input type="text" id="cpf" name="cpf" pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" placeholder="000.000.000-00" maxlength="14" inputmode="numeric" title="Digite o CPF no formato 000.000.000-00" required>
                <span class="campo-ajuda">
                  Formato: 000.000.000-00
                </span>
              </p>
              <p class="campo">
                <label for="nascimento">
                  Data de nascimento
                </label>
                <input type="date" id="nascimento" name="nascimento" required>
              </p>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              Dados de contato
            </legend>
            <div class="grupo-campos">
              <p class="campo">
                <label for="email">
                  E-mail
                </label>
                <input type="email" id="email" name="email" autocomplete="email" placeholder="nome@exemplo.com" required>
              </p>
              <p class="campo">
                <label for="telefone">
                  Telefone
                </label>
                <input type="text" inputmode="tel" id="telefone" name="telefone" pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}" placeholder="(00) 00000-0000" maxlength="15" autocomplete="tel" required>
              </p>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              Endereço
            </legend>
            <div class="grupo-campos">
              <p class="campo">
                <label for="cep">
                  CEP
                </label>
                <input type="text" id="cep" name="cep" pattern="[0-9]{5}-[0-9]{3}" placeholder="00000-000" maxlength="9" autocomplete="postal-code" required>
              </p>
              <p class="campo">
                <label for="endereco">
                  Endereço
                </label>
                <input type="text" id="endereco" name="endereco" autocomplete="address-line1" placeholder="Rua e número" required>
              </p>
              <p class="campo">
                <label for="cidade">
                  Cidade
                </label>
                <input type="text" id="cidade" name="cidade" autocomplete="address-level2" placeholder="Sua cidade" required>
              </p>
              <p class="campo">
                <label for="estado">
                  Estado
                </label>
                <select id="estado" name="estado" autocomplete="address-level1" required>
                  <option value="">
                    Selecione
                  </option>
                  <option value="PR">
                    Paraná
                  </option>
                  <option value="SC">
                    Santa Catarina
                  </option>
                  <option value="SP">
                    São Paulo
                  </option>
                </select>
              </p>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              Forma de participação
            </legend>
            <div class="opcoes">
              <label class="opcao">
                <input type="radio" name="participacao" value="doador" required>
                Doador
              </label>
              <label class="opcao">
                <input type="radio" name="participacao" value="voluntario">
                Voluntário
              </label>
              <label class="opcao">
                <input type="radio" name="participacao" value="ambos">
                Doador e voluntário
              </label>
            </div>
          </fieldset>
          <p class="consentimento">
            <input type="checkbox" id="consentimento" name="consentimento" required>
            <label for="consentimento">
              Concordo em salvar este cadastro de demonstração neste navegador.
            </label>
          </p>
          <div id="feedback-formulario" role="alert">
          </div>
          <div class="acoes-formulario">
            <button class="botao" type="submit">
              Enviar cadastro
            </button>
          </div>
        </form>
        <aside class="col-4 alertas" aria-label="Informações do cadastro">
          <div class="alerta alerta-sucesso">
            <span class="alerta-icone" aria-hidden="true">
              ✓
            </span>
            <div>
              <strong>
                Sobre o cadastro
              </strong>
              <p>
                O cadastro fica neste navegador e não é enviado à ONG. Para testar, use dados fictícios.
              </p>
            </div>
          </div>
          <div class="alerta alerta-atencao">
            <span class="alerta-icone" aria-hidden="true">
              !
            </span>
            <div>
              <strong>
                Confira seus dados
              </strong>
              <p>
                Confira telefone e e-mail antes de enviar o formulário.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
    <section class="secao">
      <div class="container">
        <h2>
          Histórico neste navegador
        </h2>
        <p>
          São guardados apenas nome, forma de participação e data. CPF, endereço e contatos não são persistidos.
        </p>
        <ul id="historico-cadastros">
        </ul>
        <button class="botao" type="button" data-limpar-historico>
          Limpar histórico
        </button>
        <p id="feedback-historico" role="status">
        </p>
      </div>
    </section>
  `;
}
