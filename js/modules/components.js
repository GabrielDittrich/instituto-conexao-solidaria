let focoAnterior;
let timer;
export function fecharMenu() {
  document.querySelector(".menu-navegacao").classList.remove("ativo");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
}
export function abrirModal() {
  focoAnterior = document.activeElement;
  const modal = document.querySelector("#modal-confirmacao");
  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  document.querySelector("main").inert = true;
  document.querySelector("header").inert = true;
  document.querySelector("footer").inert = true;
  document.body.style.overflow = "hidden";
  modal.querySelector("button").focus();
  const toast = document.querySelector("#toast-sucesso");
  toast.classList.add("visivel");
  clearTimeout(timer);
  timer = setTimeout(() => toast.classList.remove("visivel"), 3500);
}
export function fecharModal() {
  const modal = document.querySelector("#modal-confirmacao");
  if (!modal.classList.contains("aberto")) return;
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
  for (const el of document.querySelectorAll("main,header,footer"))
    el.inert = false;
  document.body.style.overflow = "";
  if (focoAnterior?.isConnected) focoAnterior.focus();
}
export function iniciarComponentes() {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".menu-toggle")) {
      const aberto = document
        .querySelector(".menu-navegacao")
        .classList.toggle("ativo");
      document
        .querySelector(".menu-toggle")
        .setAttribute("aria-expanded", String(aberto));
    }
    if (
      e.target.closest("[data-fechar-modal]") ||
      e.target.id === "modal-confirmacao"
    )
      fecharModal();
    if (e.target.closest(".pular-conteudo")) {
      e.preventDefault();
      document.querySelector("main").focus();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      fecharModal();
      fecharMenu();
    }
    const modal = document.querySelector("#modal-confirmacao");
    if (e.key !== "Tab" || !modal.classList.contains("aberto")) return;
    const botoes = [...modal.querySelectorAll("button")];
    const primeiro = botoes[0],
      ultimo = botoes.at(-1);
    if (e.shiftKey && document.activeElement === primeiro) {
      e.preventDefault();
      ultimo.focus();
    }
    if (!e.shiftKey && document.activeElement === ultimo) {
      e.preventDefault();
      primeiro.focus();
    }
  });
}
