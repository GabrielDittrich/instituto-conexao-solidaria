# Instituto Conexão Solidária

Plataforma web acadêmica desenvolvida na disciplina de Desenvolvimento Front-end do curso de Engenharia de Software. O projeto representa uma ONG fictícia e apresenta iniciativas sociais e um cadastro de apoiadores.

O objetivo é aplicar HTML semântico, CSS responsivo e JavaScript para aproximar voluntários, doadores e comunidades, além de praticar versionamento, acessibilidade, documentação e preparação para produção.

## Estado do projeto

A base funcional está implementada e recebeu melhorias de acessibilidade. O repositório utiliza branches e pull requests para organizar as alterações da Experiência Prática IV. A otimização de imagens e o build de produção estão implementados. Os testes manuais da distribuição passaram no Brave 1.93.134, conforme registro em `TESTES.md`. A versão `1.0.0` está em preparação; a publicação e a criação da release ainda precisam ser concluídas.

**Aplicação publicada:** endereço a adicionar após configurar e validar o GitHub Pages.

## Tecnologias

- HTML5: estrutura semântica, formulários e atributos de acessibilidade.
- CSS3: layout com Grid e Flexbox, media queries e estados visuais.
- JavaScript: módulos ES6, templates dinâmicos, eventos e manipulação do DOM.
- IMask 7.6.1: máscaras de CPF, telefone e CEP, incluída localmente.
- localStorage: persistência do histórico no navegador usando JSON.
- Git e GitHub: histórico de alterações, issues, milestone e pull requests.

## Funcionalidades

- Navegação SPA entre Início, Projetos e Participe, sem recarregar o documento principal.
- Cards de projetos gerados a partir de um array de objetos.
- Menu responsivo, avisos informativos, modal e notificação de confirmação.
- Formulário com validação de campos obrigatórios, nome completo, e-mail, formatos e nascimento não futuro.
- Histórico de cadastros com recuperação após recarregamento e opção de limpeza.
- Tratamento de rotas inexistentes, JSON inválido e falhas de gravação.

## Executar localmente

### Requisitos

Um navegador atualizado com JavaScript e módulos ES6. Para servir os arquivos, use VS Code com Live Server ou Python 3. Git é necessário apenas para clonar e versionar o projeto. Para desenvolvimento com Live Server, não é necessário npm. Para gerar a versão de produção, instale Node.js 18 ou superior e execute `npm ci` e `npm run build`.

### Obter os arquivos

Clone o repositório ou baixe seu ZIP no GitHub e extraia a pasta. Abra a pasta que contém `index.html`.

### Opção 1 — Live Server

1. Abra a pasta no VS Code.
2. Instale a extensão Live Server, caso necessário.
3. Clique com o botão direito em `index.html` e selecione **Open with Live Server**.

### Opção 2 — Python 3

No terminal, dentro da pasta do projeto:

```bash
python3 -m http.server 8000
```

No Windows, se necessário, use `py -m http.server 8000`.

Acesse http://localhost:8000. Para encerrar o servidor, pressione Ctrl+C no terminal.

Os módulos JavaScript exigem um servidor HTTP. Não abra `index.html` diretamente com duplo clique.

## Utilização

Navegue pelo menu ou pelos botões da página inicial. Em **Participe**, preencha os campos com dados fictícios, escolha a forma de participação e confirme o consentimento. O formulário exibe mensagens quando há informações inválidas. Após salvar, apresenta uma confirmação e atualiza o histórico. O botão **Limpar histórico** remove os registros deste navegador.

## Estrutura de diretórios

```text
projeto-ong/
├── index.html
├── cadastro.html
├── projetos.html
├── README.md
├── TESTES.md
├── ACESSIBILIDADE.md
├── css/
│   └── estilos.css
├── imagens/
│   ├── voluntarios.jpg
│   ├── voluntarios-480.jpg
│   ├── voluntarios-800.jpg
│   └── favicon.svg
├── js/
│   ├── app.js
│   ├── modules/
│   │   ├── router.js
│   │   ├── form.js
│   │   ├── storage.js
│   │   └── components.js
│   ├── templates/
│   │   ├── index.js
│   │   ├── projetos.js
│   │   └── cadastro.js
│   └── vendor/
│       └── imask.min.js
└── licenses/
    └── IMask-LICENSE.txt
```

A pasta local pode ter o nome do repositório; a organização interna é a mesma. Caso exista uma licença geral na raiz, ela é mantida no arquivo `LICENSE`.

## Arquitetura e navegação

`index.html` contém a estrutura compartilhada: cabeçalho, área principal, rodapé, modal e toast. `app.js` inicializa os módulos.

`router.js` associa as hashes `#inicio`, `#projetos` e `#cadastro` aos templates. Ao mudar de rota, atualiza o conteúdo principal, o título, o item ativo do menu e o foco. Hashes desconhecidas retornam ao início. `cadastro.html` e `projetos.html` redirecionam links antigos para a SPA.

Os templates retornam HTML. Os cards usam `map()` e `join()`. O formulário e os componentes utilizam delegação de eventos para continuar funcionando após a substituição dos elementos da página.

`form.js` separa validação e máscaras. As instâncias do IMask são destruídas antes da troca de rota e recriadas ao renderizar o cadastro. Se a biblioteca não carregar, os campos permanecem disponíveis, mas os formatos precisam ser digitados manualmente.

## Persistência e limites

`storage.js` salva até 50 registros na chave `conexao-solidaria:cadastros:v1`. Cada registro contém somente nome, participação e data. CPF, nascimento, endereço e contatos não são persistidos.

Os dados ficam vinculados à origem e ao navegador utilizados; não são compartilhados entre dispositivos. A limpeza dos dados do site também remove o histórico. Dados recuperados são inseridos com `textContent`.

**Não existe backend, envio à ONG ou processamento de pagamentos.** Use dados fictícios. O CPF é validado pelo formato, sem cálculo dos dígitos verificadores. Dados de contato e ações sociais representam uma demonstração acadêmica.

## Acessibilidade

Recursos implementados:

- Idioma `pt-BR`, landmarks semânticos, títulos e textos alternativos.
- Link para pular ao conteúdo e indicadores de foco.
- Rótulos de formulário, instruções de obrigatoriedade e erros textuais associados aos campos e ao grupo de participação.
- Controle de estado e nome acessível do menu móvel, com retorno do foco ao fechar por Escape.
- Modal com nome e descrição acessíveis, contenção e retorno do foco.
- Links dos cards identificando o projeto.
- Suporte a movimento reduzido e ajustes de contraste.

`ACESSIBILIDADE.md` registra as mudanças, cálculos de contraste e testes manuais pendentes. A existência desses recursos não constitui certificação de conformidade integral com WCAG 2.1 AA.

## Testes

Consulte `TESTES.md` e `ACESSIBILIDADE.md`. Registre resultados reais, informando navegador e, quando utilizado, leitor de tela.

Antes de integrar alterações, confira navegação, formulários válidos e inválidos, máscaras após troca de rota, persistência, limpeza do histórico, modal, teclado, zoom, telas pequenas e Console. Não marque testes como concluídos sem executá-los.

## Versionamento e colaboração

Fluxo adotado:

- `main`: referência para versões estáveis e publicação.
- `develop`: integração das alterações do próximo lançamento.
- `feature/*`: funcionalidades e melhorias, criadas a partir de `develop`.
- `docs/readme`: atualização de documentação a partir de `develop`.
- `release/*`: preparação de uma versão a partir de `develop`, integrada em `main` e de volta em `develop`.
- `hotfix/*`: correções urgentes de produção a partir de `main`, integradas também em `develop`.

O commit inicial registra a base acadêmica. As novas alterações são integradas por pull requests, com descrição e resultados de testes. Issues acompanham tarefas, e o milestone **Versão 1.0.0** reúne as pendências da primeira entrega estável.

As mensagens seguem Conventional Commits: `feat`, `fix`, `docs`, `refactor`, `perf` e `chore`. As tags de lançamento seguem `MAJOR.MINOR.PATCH`: alterações incompatíveis, funcionalidades compatíveis e correções, respectivamente. A primeira versão estável prevista é `v1.0.0`.

## Manutenção

- Conteúdo das telas: editar `js/templates/`.
- Projetos: atualizar o array em `js/templates/projetos.js`.
- Layout e responsividade: editar `css/estilos.css`.
- Rotas: ajustar `router.js` e os links do menu.
- Validação e máscaras: editar `form.js`.
- Histórico: editar `storage.js`, preservando compatibilidade com registros existentes.
- Menu e modal: editar `components.js`.

Ao atualizar o IMask, mantenha a licença e teste máscaras, envio, limpeza e troca de rota. Após qualquer alteração, repita os testes afetados e atualize a documentação correspondente.

## Produção e publicação

O código-fonte da raiz continua disponível para desenvolvimento com Live Server. Para gerar a distribuição otimizada:

```bash
npm ci
npm run build
```

O build usa esbuild com versão fixada no lockfile, agrupa os módulos JavaScript, minifica JS e CSS e copia imagens, IMask e licenças para `dist/`. O HTML gerado referencia os arquivos minificados. Os caminhos relativos permitem hospedagem em uma subpasta, como no GitHub Pages.

Para testar a distribuição, abra `dist/index.html` com Live Server ou execute `python -m http.server 8000 --directory dist` e acesse `http://localhost:8000`. Não abra por `file://`.

A pasta `dist/` está versionada nesta etapa para facilitar a entrega e deve ser regenerada após alterações no código-fonte. `node_modules/` é ignorado pelo Git. Não edite os arquivos minificados diretamente.

Estrutura acrescentada: `package.json`, `package-lock.json`, `scripts/build.mjs`, `.gitignore`, `OTIMIZACAO.md` e `dist/`.

Consulte `OTIMIZACAO.md` para as medições e verificações desta etapa. A publicação está prevista no GitHub Pages e deverá ser validada no endereço público antes da conclusão da release. O workflow `.github/workflows/pages.yml` executa `npm ci` e `npm run build` nos PRs para `main` e `develop`. Publica `dist/` apenas em atualizações da `main` ou execução manual na `main`. Configure **Settings → Pages → Source → GitHub Actions** antes de integrar a release.

## Aplicação publicada

https://gabrieldittrich.github.io/instituto-conexao-solidaria/

O arquivo vazio `dist/.nojekyll` é gerado automaticamente para indicar distribuição estática sem Jekyll; o workflow já publica o artefato estático diretamente.

## Autoria e licenças

**Gabriel Dittrich Cardoso João** — projeto acadêmico de Engenharia de Software, Universidade Positivo.

A licença geral do projeto, quando adicionada, está em `LICENSE`. A biblioteca IMask possui licença MIT, preservada em `licenses/IMask-LICENSE.txt`. Essa licença se refere à biblioteca; a distribuição das imagens deve respeitar suas respectivas permissões de uso.
