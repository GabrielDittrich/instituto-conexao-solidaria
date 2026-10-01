import {
  salvarCadastro,
  limparCadastros,
  renderizarHistorico,
} from "./storage.js";
import { abrirModal } from "./components.js";
function validar(campo) {
  campo.setCustomValidity("");
  if (campo.id === "nome" && campo.value.trim().split(/\s+/).length < 2)
    campo.setCustomValidity("Informe nome e sobrenome.");
  if (["endereco", "cidade"].includes(campo.id) && !campo.value.trim())
    campo.setCustomValidity("Preencha este campo.");
  if (campo.id === "nascimento" && campo.value && campo.value > hoje())
    campo.setCustomValidity("A data de nascimento não pode estar no futuro.");
  return campo.validity.valid;
}
function hoje() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function mensagem(campo) {
  if (campo.validity.valueMissing) return "Preencha este campo obrigatório.";
  if (campo.validity.typeMismatch) return "Informe um e-mail válido.";
  if (campo.validity.patternMismatch)
    return "Confira o formato indicado no campo.";
  return campo.validationMessage;
}
function exibirErro(campo) {
  const valido = validar(campo);
  campo.setAttribute("aria-invalid", String(!valido));
  let erro = document.getElementById(`erro-${campo.id}`);
  if (!erro && campo.id) {
    erro = document.createElement("span");
    erro.id = `erro-${campo.id}`;
    erro.className = "campo-erro";
    campo.insertAdjacentElement("afterend", erro);
    campo.setAttribute("aria-describedby", erro.id);
  }
  if (erro) erro.textContent = valido ? "" : mensagem(campo);
  return valido;
}
let mascaras = [];
export function destruirMascaras() {
  mascaras.forEach((m) => m.destroy());
  mascaras = [];
}
function iniciarMascaras() {
  destruirMascaras();
  if (typeof window.IMask !== "function") return;
  const configuracoes = {
    cpf: { mask: "000.000.000-00" },
    cep: { mask: "00000-000" },
    telefone: {
      mask: [{ mask: "(00) 0000-0000" }, { mask: "(00) 00000-0000" }],
    },
  };
  for (const [id, opcoes] of Object.entries(configuracoes)) {
    const campo = document.getElementById(id);
    if (campo) mascaras.push(window.IMask(campo, opcoes));
  }
}
export function prepararFormulario() {
  const data = document.querySelector("#nascimento");
  if (data) data.max = hoje();
  iniciarMascaras();
  renderizarHistorico();
}
export function iniciarFormulario() {
  // Delegação: estes listeners continuam válidos após a troca dos templates.
  document.addEventListener("input", (e) => {
    if (!e.target.closest("#formulario-cadastro")) return;
    if (e.target.hasAttribute("aria-invalid")) exibirErro(e.target);
  });
  document.addEventListener("change", (e) => {
    if (e.target.closest("#formulario-cadastro")) exibirErro(e.target);
  });
  document.addEventListener("submit", (e) => {
    if (e.target.id !== "formulario-cadastro") return;
    e.preventDefault();
    const form = e.target;
    const campos = [...form.querySelectorAll("input,select")];
    const invalidos = campos.filter((c) => !exibirErro(c));
    const feedback = form.querySelector("#feedback-formulario");
    if (invalidos.length) {
      feedback.textContent =
        "Revise os campos indicados, escolha a participação e confirme o consentimento.";
      invalidos[0].focus();
      return;
    }
    try {
      salvarCadastro(Object.fromEntries(new FormData(form)));
      feedback.textContent = "";
      form.reset();
      mascaras.forEach((m) => {
        m.value = "";
      });
      form
        .querySelectorAll("[aria-invalid]")
        .forEach((c) => c.removeAttribute("aria-invalid"));
      form.querySelectorAll(".campo-erro").forEach((c) => (c.textContent = ""));
      renderizarHistorico();
      abrirModal();
    } catch {
      feedback.textContent =
        "Não foi possível salvar. Verifique se o armazenamento do navegador está permitido.";
    }
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-limpar-historico]")) return;
    const feedback = document.querySelector("#feedback-historico");
    try {
      limparCadastros();
      renderizarHistorico();
      feedback.textContent = "Histórico removido.";
    } catch {
      feedback.textContent = "Não foi possível remover o histórico.";
    }
  });
}
