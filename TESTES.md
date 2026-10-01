# Verificação da base da Atividade III

## Verificações realizadas no ambiente

- Sintaxe de todos os módulos JavaScript: passou.
- Templates das três telas: passou, com um h1 por tela.
- Geração de três cards por map/join: passou.
- Persistência de nome, participação e data sem CPF: passou.
- Limite de 50 cadastros: passou.
- JSON inválido, estrutura incompatível e registros inválidos: passou.
- Limpeza do histórico: passou.
- Falha de gravação propagada para tratamento no formulário: passou.

Não foi possível executar o navegador automatizado: o Chromium não estava instalado e o download disponível retornou um arquivo inválido. Os testes acima não comprovam o comportamento visual ou a navegação completa por teclado.

## Roteiro manual antes de continuar para a Atividade IV

1. Abra index.html pelo Live Server e navegue entre Início, Projetos e Participe. Confira título e item ativo do menu. Teste voltar/avançar e recarregar em #cadastro.
2. Acesse #rota-inexistente e confira o retorno para Início.
3. Envie o formulário vazio. Confira mensagens, foco no primeiro campo inválido e seleção obrigatória da participação e consentimento.
4. Digite dados fictícios. Confira máscaras de CPF, telefone e CEP, e-mail inválido e nascimento futuro. A validação do CPF verifica somente formato.
5. Envie um cadastro válido. Confira modal, Tab/Shift+Tab, Escape, botão fechar e retorno do foco.
6. Confira o histórico, recarregue e confira persistência. Clique em Limpar histórico.
7. Vá a Projetos e retorne ao cadastro. Repita um envio para verificar os eventos após troca de rota.
8. No DevTools/Application, altere a chave conexao-solidaria:cadastros:v1 para texto inválido e recarregue. A tela deve mostrar histórico vazio.
9. Teste a 375px e 1366px, o menu móvel, o link Pular para o conteúdo e a navegação por teclado. Confira ausência de rolagem horizontal.
10. Confira Console e Network. O IMask está incluído localmente. Bloqueie a requisição de imask.min.js no Network e recarregue: o formulário deve continuar funcionando sem máscara, exigindo os formatos digitados manualmente.

A auditoria completa WCAG AA, otimização e publicação pertencem à próxima etapa.

11. Confira que os dois avisos laterais possuem altura conforme o texto e que nenhum campo vazio aparece vermelho antes da interação.
12. Após um envio, volte a digitar nos campos mascarados; navegue para outra rota e retorne. Confira a reinicialização do IMask.

Verificação adicional em Node: modelos reais do IMask para CPF, CEP, telefone fixo e celular passaram. A integração de digitação no navegador continua pendente.

## Testes manuais da versão de produção — 01/10/2026

**Responsável:** Gabriel Dittrich Cardoso João  
**Navegador:** Brave 1.93.134  
**Ambiente:** versão de produção em `dist/`, executada pelo Live Server.  
**Responsividade:** verificada pela simulação de dispositivos do navegador.

| Teste | Resultado |
| --- | --- |
| Navegação entre Início, Projetos e Cadastro, incluindo voltar e avançar | Aprovado |
| Envio do formulário vazio, mensagens de erro e foco no primeiro campo inválido | Aprovado |
| Máscaras de CPF, telefone e CEP, inclusive após trocar de página | Aprovado |
| Cadastro com dados fictícios, abertura do modal e limpeza do formulário | Aprovado |
| Permanência do histórico após atualizar a página | Aprovado |
| Limpeza do histórico | Aprovado |
| Navegação por teclado, foco visível, menu, modal e fechamento por Escape | Aprovado |
| Tela pequena simulada e zoom de 200%, sem cortes que impeçam o uso | Aprovado |
| Console e Network sem erros de JavaScript ou arquivos com erro 404 | Aprovado |

Todos os testes acima passaram conforme a execução manual do responsável. Não foram realizados testes em celular físico, com leitor de tela ou uma auditoria completa de conformidade WCAG 2.1 AA.