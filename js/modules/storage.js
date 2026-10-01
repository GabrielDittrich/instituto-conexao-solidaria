const KEY = "conexao-solidaria:cadastros:v1";
export function listarCadastros() {
  try {
    const dados = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(dados)
      ? dados.filter(
          (d) =>
            d &&
            typeof d.nome === "string" &&
            ["doador", "voluntario", "ambos"].includes(d.participacao) &&
            typeof d.data === "string" &&
            Number.isFinite(Date.parse(d.data)),
        )
      : [];
  } catch {
    return [];
  }
}
export function salvarCadastro(dados) {
  // Persistimos somente o mínimo necessário ao histórico da demonstração.
  localStorage.setItem(
    KEY,
    JSON.stringify(
      [
        ...listarCadastros(),
        {
          nome: dados.nome,
          participacao: dados.participacao,
          data: new Date().toISOString(),
        },
      ].slice(-50),
    ),
  );
}
export function limparCadastros() {
  localStorage.removeItem(KEY);
}
export function renderizarHistorico() {
  const lista = document.querySelector("#historico-cadastros");
  if (!lista) return;
  lista.replaceChildren();
  const dados = listarCadastros();
  for (const d of dados) {
    const item = document.createElement("li");
    item.textContent = `${d.nome} — ${d.participacao} — ${new Date(d.data).toLocaleString("pt-BR")}`;
    lista.append(item);
  }
  if (!dados.length) {
    const item = document.createElement("li");
    item.textContent = "Nenhum cadastro salvo.";
    lista.append(item);
  }
}
