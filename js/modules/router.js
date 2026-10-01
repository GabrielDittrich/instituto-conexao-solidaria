import { inicioTemplate } from "../templates/index.js";
import { projetosTemplate } from "../templates/projetos.js";
import { cadastroTemplate } from "../templates/cadastro.js";
import { prepararFormulario, destruirMascaras } from "./form.js";
import { fecharMenu, fecharModal } from "./components.js";
const rotas = {
  inicio: { template: inicioTemplate, titulo: "Início" },
  projetos: { template: projetosTemplate, titulo: "Projetos" },
  cadastro: { template: cadastroTemplate, titulo: "Cadastro" },
};
export function renderizar() {
  fecharModal();
  const chave = location.hash.slice(1) || "inicio";
  const rota = Object.hasOwn(rotas, chave) ? chave : "inicio";
  if (chave !== rota) history.replaceState(null, "", "#inicio");
  const main = document.querySelector("#conteudo");
  destruirMascaras();
  main.innerHTML = rotas[rota].template();
  document.title = `${rotas[rota].titulo} | Instituto Conexão Solidária`;
  document.querySelectorAll(".menu-navegacao a").forEach((a) => {
    if (a.hash === `#${rota}`) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  fecharMenu();
  prepararFormulario();
  window.scrollTo(0, 0);
  main.focus({ preventScroll: true });
}
export function iniciarRotas() {
  window.addEventListener("hashchange", renderizar);
  renderizar();
}
