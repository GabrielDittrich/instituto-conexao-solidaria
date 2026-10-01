export function inicioTemplate() {
  return /* html */ `
    <section class="hero">
      <div class="container hero-conteudo">
        <span class="badge badge-ativo">
          Impacto social
        </span>
        <h1>
          Conectando pessoas para transformar comunidades
        </h1>
        <p>
          Promovemos educação, alimentação e inclusão social para pessoas em situação de vulnerabilidade.
        </p>
        <div class="acoes">
          <a class="botao botao-secundario" href="#projetos">
            Conheça os projetos
          </a>
          <a class="botao" href="#cadastro">
            Quero participar
          </a>
        </div>
      </div>
    </section>
    <section class="secao">
      <div class="grid-container">
        <div class="col-6">
          <figure>
            <img src="imagens/voluntarios.jpg" alt="Voluntários organizando alimentos em caixas para doação às famílias" width="1200" height="675">
            <figcaption>
              Voluntários durante uma ação de arrecadação de alimentos.
            </figcaption>
          </figure>
        </div>
        <div class="col-6 secao-cabecalho">
          <h2>
            Quem somos
          </h2>
          <p>
            O Instituto Conexão Solidária aproxima voluntários, doadores e comunidades para ampliar oportunidades e melhorar a qualidade de vida.
          </p>
        </div>
      </div>
    </section>
    <section class="secao" aria-labelledby="atuacao">
      <div class="container secao-cabecalho">
        <h2 id="atuacao">
          Nossa atuação
        </h2>
        <p>
          Trabalhamos em duas frentes essenciais para o desenvolvimento da comunidade.
        </p>
      </div>
      <div class="grid-container">
        <article class="cartao col-6">
          <span class="badge badge-educacao">
            Educação
          </span>
          <h3>
            Educação e inclusão digital
          </h3>
          <p>
            Oferecemos oficinas de informática e atividades de apoio educacional.
          </p>
        </article>
        <article class="cartao col-6">
          <span class="badge badge-doacao">
            Doação
          </span>
          <h3>
            Arrecadação de alimentos
          </h3>
          <p>
            Organizamos campanhas para apoiar famílias em situação de vulnerabilidade.
          </p>
        </article>
      </div>
    </section>
    <section class="secao">
      <div class="container">
        <h2>
          Entre em contato
        </h2>
        <address>
          <p>
            E-mail:
            <a href="mailto:contato@conexaosolidaria.org">
              contato@conexaosolidaria.org
            </a>
          </p>
          <p>
            Telefone:
            <a href="tel:+554130000000">
              (41) 3000-0000
            </a>
          </p>
          <p>
            Rua da Solidariedade, 100 – Curitiba/PR
          </p>
        </address>
      </div>
    </section>
  `;
}
