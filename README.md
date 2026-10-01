# Instituto Conexão Solidária

Projeto acadêmico de Desenvolvimento Front-end. Interface responsiva em HTML, CSS e JavaScript, com SPA por hash e módulos ES6.

## Executar

Abra a pasta no VS Code e execute `index.html` com a extensão Live Server. Alternativamente, com Python instalado, execute `python -m http.server 8000` nesta pasta e visite http://localhost:8000. Os módulos exigem um servidor HTTP; não abra o HTML diretamente com duplo clique.

## Estrutura

- `index.html`: documento principal, menu, modal e toast.
- `css/estilos.css`: estilos e responsividade.
- `js/app.js`: inicialização.
- `js/modules/router.js`: rotas `#inicio`, `#projetos` e `#cadastro`, título e fallback.
- `js/modules/form.js`: validação, máscaras locais e eventos delegados.
- `js/modules/storage.js`: JSON, histórico e tratamento de falhas.
- `js/modules/components.js`: menu, modal, foco e notificações.
- `js/templates/`: conteúdo das três telas; cards gerados por array, map e join.
- `imagens/`: imagens originais.
- `cadastro.html` e `projetos.html`: compatibilidade com links antigos.

## Funcionalidades e limites

A navegação altera apenas o conteúdo principal. O formulário valida obrigatoriedade, formato de CPF, telefone e CEP, e-mail, nome completo e nascimento não futuro. O CPF é verificado pelo formato, sem cálculo dos dígitos verificadores. As máscaras usam IMask 7.6.1, incluído em `js/vendor/imask.min.js`, com licença MIT em `licenses/IMask-LICENSE.txt`. A biblioteca é inicializada a cada renderização do cadastro e suas instâncias são destruídas antes da troca de rota. Se ela não carregar, os campos continuam disponíveis e a validação exige os formatos indicados, digitados manualmente.

O histórico guarda até 50 registros, somente com nome, participação e data, na chave `conexao-solidaria:cadastros:v1`. Não existe backend ou envio real. Use dados fictícios. Os demais campos não são persistidos. O botão de limpeza remove o histórico. JSON inválido é tratado como histórico vazio; falhas de gravação exibem mensagem e preservam o formulário. Dados recuperados são inseridos com textContent.

Inclui foco visível, link para pular ao conteúdo, mensagens textuais, modal com foco contido e retorno ao botão, e suporte a movimento reduzido. Isso não equivale a uma auditoria completa de conformidade WCAG AA.

## Próxima etapa

Criar repositório, branches, issues, milestone e PRs. Depois realizar auditoria de acessibilidade, otimização e deploy da Atividade IV. Nenhuma release foi criada ainda.
