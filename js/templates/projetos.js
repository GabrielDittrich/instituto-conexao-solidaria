const projetos = [
  {
    badge: "badge-doacao",
    categoria: "● Doação",
    titulo: "Alimento na Mesa",
    descricao:
      "Arrecada alimentos não perecíveis para famílias atendidas pela organização.",
    acao: "Apoiar projeto",
  },
  {
    badge: "badge-educacao",
    categoria: "● Educação",
    titulo: "Material que Educa",
    descricao: "Recebe cadernos, livros e materiais escolares em bom estado.",
    acao: "Apoiar projeto",
  },
  {
    badge: "badge-voluntariado",
    categoria: "● Voluntariado",
    titulo: "Apoio nas oficinas",
    descricao:
      "Voluntários auxiliam atividades educacionais e de inclusão digital.",
    acao: "Ser voluntário",
  },
];
export function projetosTemplate() {
  return '<section class="hero"><div class="container hero-conteudo"><span class="badge badge-ativo">Projetos ativos</span><h1>Transformando a comunidade</h1><p>Nossos projetos unem doadores e voluntários em iniciativas de educação, segurança alimentar e inclusão social.</p><div class="acoes"><a class="botao botao-secundario" href="#cadastro">Quero participar</a></div></div></section>\n<section class="secao" aria-labelledby="projetos-titulo"><div class="container secao-cabecalho"><h2 id="projetos-titulo">Conheça nossas iniciativas</h2><p>Cada projeto apresenta uma categoria para facilitar a identificação das formas de contribuição.</p></div><div class="grid-container">__CARDS__</div></section>\n<section class="secao" aria-labelledby="feedback-titulo"><div class="container secao-cabecalho"><h2 id="feedback-titulo">Central de avisos</h2><p>Confira as formas de apoiar as iniciativas.</p></div><div class="container alertas"><div class="alerta alerta-sucesso"><span class="alerta-icone" aria-hidden="true">✓</span><div><strong>Inscrições abertas</strong><p>Novos voluntários podem participar das oficinas de inclusão digital.</p></div></div><div class="alerta alerta-atencao"><span class="alerta-icone" aria-hidden="true">!</span><div><strong>Doação de alimentos</strong><p>Alimentos não perecíveis ajudam as famílias atendidas pelos projetos.</p></div></div><div class="alerta alerta-atencao"><span class="alerta-icone" aria-hidden="true">×</span><div><strong>Como contribuir</strong><p>Cadastre seu interesse para apoiar os projetos. Este site não processa pagamentos.</p></div></div></div></section>'.replace(
    "__CARDS__",
    projetos
      .map(
        (p) =>
          `<article class="cartao col-4"><span class="badge ${p.badge}">${p.categoria}</span><h3>${p.titulo}</h3><p>${p.descricao}</p><a class="botao" href="#cadastro" aria-label="${p.acao}: ${p.titulo}">${p.acao}</a></article>`,
      )
      .join(""),
  );
}
