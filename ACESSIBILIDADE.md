# Revisão de acessibilidade — Atividade IV

## Alterações

- Bordas de inputs e select mais contrastantes; placeholder com cor explícita.
- Foco escuro em áreas claras e amarelo no cabeçalho e banner, incluindo links do menu.
- Escape fecha o menu móvel e devolve o foco ao botão; nome acessível alterna Abrir/Fechar menu.
- Todos os campos obrigatórios são anunciados nas instruções do formulário.
- Ajuda de CPF associada por aria-describedby; mensagens de erro preservam essa associação.
- Participação possui erro textual compartilhado pelos radios. Ao selecionar uma opção, todos os estados aria-invalid são corrigidos.
- Consentimento possui erro textual associado; mensagem orienta a confirmar o consentimento.
- Modal associa sua descrição, mantém o controle de foco já existente e permite rolagem interna em telas pequenas.
- Botão de fechar modal tem área de 44 x 44 pixels.
- Toast inicia vazio e recebe texto no envio.
- Links dos cards identificam o projeto no nome acessível.
- Avisos estáticos não usam regiões de anúncio automático; foi removida a mensagem fixa de doação não concluída e a informação sem evidência de prazo/meta.
- Mantidos lang pt-BR, títulos, landmarks, textos alternativos, skip link e movimento reduzido.

## Verificação realizada

Sintaxe de todos os scripts: passou.
Estrutura dos atributos ARIA e identificação dos links dos projetos: passou.
Teste isolado da validação do grupo de participação (vazio, seleção e limpeza do erro): passou.

Contraste calculado a partir dos valores definidos no CSS:

| Elemento | Cores | Razão |
|---|---|---|
| Texto secundário | #5f6b70 / #ffffff | 5,49:1 |
| Botão verde | #ffffff / #1f6f5c | 6,02:1 |
| Borda dos campos | #768780 / #ffffff | 3,79:1 |
| Foco em área clara | #145044 / #ffffff | 9,29:1 |
| Foco no cabeçalho | #ffd66b / #145044 | 6,67:1 |
| Texto de erro | #a51c1c / #ffffff | 7,55:1 |

Esses cálculos verificam as combinações listadas, não constituem auditoria de todos os estados ou certificação WCAG 2.1 AA.

## Testes manuais pendentes

- [ ] Com Tab e Shift+Tab, percorrer menu, links dos cards e todos os campos; verificar foco visível e ausência de elementos encobertos pelo cabeçalho.
- [ ] Em tela móvel, abrir menu com Enter/Espaço; fechar com Escape e confirmar retorno do foco.
- [ ] Acionar Pular para o conteúdo; confirmar foco na área principal.
- [ ] Enviar formulário vazio: conferir erros por texto e foco no primeiro campo inválido.
- [ ] Escolher participação: confirmar desaparecimento do erro do grupo; marcar consentimento e conferir sua mensagem.
- [ ] Corrigir CPF, telefone, CEP e e-mail; conferir limpeza das mensagens e envio válido.
- [ ] Abrir modal após envio, testar Tab/Shift+Tab, Escape, clique de fechamento e retorno do foco.
- [ ] Testar zoom de 200% e largura de 320 CSS pixels; conferir leitura, modal e ausência de rolagem horizontal.
- [ ] Com NVDA/Firefox ou Chrome, ou Orca no Linux, conferir títulos, landmarks, rótulos, ajuda de CPF, mensagens de erro, descrição do modal e histórico.
- [ ] Repetir cadastro após troca de rota; verificar IMask, histórico e Console.

Registrar navegador, leitor de tela e resultados reais após executar. Manter a issue aberta enquanto os testes exigidos não forem realizados.

## Referências

- https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
- https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html
- https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
