# Preparação da release 1.0.0

1. Copiar os arquivos para a branch release/1.0.0, preservando .github/workflows/pages.yml.
2. No GitHub: Settings → Pages → Build and deployment → Source: GitHub Actions.
3. Commitar e abrir PR de release/1.0.0 para main, com milestone Versão 1.0.0.
4. Conferir o build automático no PR e revisar as alterações antes do merge.
5. Após o merge, acompanhar o workflow em Actions e abrir o endereço do ambiente github-pages.
6. Repetir navegação, cadastro fictício, máscaras, histórico, modal e verificar Console/Network no site publicado. O armazenamento local do endereço público é independente do Live Server.
7. Registrar o resultado do deploy e testes públicos; atualizar o README para publicação confirmada apenas após verificar o site.
8. Criar a tag/release v1.0.0 na main após a validação.
9. Integrar main de volta em develop por PR para sincronizar os ajustes da release.
10. Fechar apenas issues cujos critérios foram cumpridos e encerrar o milestone após site, release e PRs concluídos.

O workflow verifica build nos PRs e publica somente a main. Não cria tags, releases ou fecha issues automaticamente. Não é necessária uma chave pessoal: usa o token padrão do GitHub Actions com permissões de Pages e identidade no job de deploy.

A versão no package.json e lockfile é 1.0.0, mas a release pública ainda não foi criada. O build local não comprova que o deploy no GitHub passou.

Documentação oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
