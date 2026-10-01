# Otimização para produção

## Alterações

- Build reproduzível via `npm ci` e `npm run build`, com esbuild 0.25.10 e lockfile.
- Módulos JavaScript agrupados em um arquivo, com JS e CSS minificados apenas em `dist/`.
- Código-fonte legível preservado na raiz.
- PNG de 1.000.023 bytes, sem referências no código, retirado do pacote. O arquivo original permanece no histórico Git anterior.
- JPG otimizado e variantes de 480 e 800 pixels, com `srcset` e `sizes`.
- Imagem abaixo do hero com `loading="lazy"`, `decoding="async"` e dimensões explícitas para reservar espaço.
- IMask local carregado com `defer`, mantendo a licença e a inicialização das máscaras.
- Favicon SVG e cor do tema.
- Caminhos relativos preservados, inclusive nos redirecionamentos das páginas antigas.
- `node_modules/` ignorado; `dist/` versionado nesta etapa e regenerado a cada mudança.

## Medições de arquivos (sem compressão HTTP)

| Recurso | Fonte/base | Produção |
| --- | ---: | ---: |
| JavaScript próprio (8 módulos → 1 bundle) | 24556 bytes | 20339 bytes |
| CSS | 14346 bytes | 11577 bytes |
| JPG 1200 pixels | 132.988 bytes | 129.487 bytes |
| JPG para celular, 480 pixels | — | 31.188 bytes |
| JPG intermediário, 800 pixels | — | 69.545 bytes |

IMask permanece separado, já minificado (89.066 bytes). As variantes são escolhidas pelo navegador conforme largura e densidade de pixels; não há garantia de que todo celular baixe a menor versão. A retirada do PNG reduz o pacote, mas não é economia de transferência de uma página, pois ele já não era solicitado.

## Validação realizada nesta etapa

- Build de produção executado com sucesso.
- Sintaxe JavaScript das fontes, script de build e bundle verificada.
- Referências locais do HTML de produção e imagens dos templates conferidas.
- Dimensões dos JPEGs verificadas (480×270, 800×450 e 1200×675).

## Verificações pendentes no navegador

- Abrir `dist/index.html` via servidor HTTP e conferir as três rotas.
- Testar CPF, telefone e CEP, incluindo navegação de ida e volta para cadastro.
- Testar envio inválido/válido, histórico, limpeza e modal.
- Conferir Console e Network para erros/404 e arquivos efetivamente carregados.
- Conferir celular, teclado, foco e zoom; comparar com a versão fonte.
- Medir desempenho com Lighthouse, registrando navegador, condições e resultados reais.

Na etapa inicial de otimização não foram executados testes de interface nem Lighthouse. Posteriormente, os testes manuais de interface passaram no Brave 1.93.134, conforme `TESTES.md`; Lighthouse continua pendente. Não há pontuação de desempenho ou conformidade WCAG certificada.

## Publicação

Publicar o conteúdo de `dist/`. O GitHub Pages não oferece `dist` como pasta na opção simples de branch; o workflow `.github/workflows/pages.yml` foi preparado para enviar essa pasta após o merge na `main` e a configuração do Pages. O build não realiza deploy nem cria a release.

Referência do build: https://esbuild.github.io/api/
