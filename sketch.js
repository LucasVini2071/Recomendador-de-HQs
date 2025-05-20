let hqs = [
  { nome: "Calvin e Haroldo", idade: 0, categorias: ["humor", "aventura", "cotidiano"] },
  { nome: "Maus", idade: 12, categorias: ["drama", "histórico"] },
  { nome: "Persépolis", idade: 12, categorias: ["drama", "histórico", "cotidiano"] },
  { nome: "Watchmen", idade: 16, categorias: ["super-herói", "ficção científica", "drama", "dc"] },
  { nome: "Sandman", idade: 16, categorias: ["fantasia", "drama", "mistério", "dc"] },
  { nome: "V de Vingança", idade: 16, categorias: ["ficção científica", "drama", "ação", "dc"] },
  { nome: "Turma da Mônica", idade: 0, categorias: ["infantil", "humor"] },
  { nome: "Invencível", idade: 14, categorias: ["super-herói", "ação", "drama", "ficção científica", "image comics"] },
  { nome: "Homem-Aranha: De Volta ao Lar", idade: 12, categorias: ["super-herói", "ação", "marvel"] },
  { nome: "Batman: O Cavaleiro das Trevas", idade: 14, categorias: ["super-herói", "drama", "ação", "dc"] },
  { nome: "Vingadores: Ultimato", idade: 12, categorias: ["super-herói", "ação", "ficção científica", "marvel"] }
];

let idadeUsuario;
let gostaSuperHeroiAcao, gostaFantasiaFiccao, gostaDramaHistorico, gostaHumorInfantil;
let prefereMarvel, prefereDC, prefereOutrasEditoras;
let hqsRecomendadas = [];

function setup() {
  createCanvas(800, 600);
  background(240);
  textSize(18);
  fill(50);
  text("Recomendador de HQs", 20, 30);

  // Coletar idade
  idadeUsuario = int(prompt("Qual sua idade?"));

  // Coletar preferências de HQs de forma mais abrangente
  gostaSuperHeroiAcao = prompt("Você gosta de HQs de super-herói ou ação? (sim/não)").toLowerCase() === "sim";
  gostaFantasiaFiccao = prompt("Você gosta de HQs de fantasia ou ficção científica? (sim/não)").toLowerCase() === "sim";
  gostaDramaHistorico = prompt("Você gosta de HQs de drama ou históricas? (sim/não)").toLowerCase() === "sim";
  gostaHumorInfantil = prompt("Você gosta de HQs de humor, infantis ou de cotidiano? (sim/não)").toLowerCase() === "sim";

  // Perguntas sobre editoras
  prefereMarvel = prompt("Você prefere HQs da Marvel? (sim/não)").toLowerCase() === "sim";
  prefereDC = prompt("Você prefere HQs da DC? (sim/não)").toLowerCase() === "sim";
  prefereOutrasEditoras = prompt("Você se interessa por HQs de outras editoras (como Image Comics, etc.)? (sim/não)").toLowerCase() === "sim";


  for (let hq of hqs) {
    if (idadeUsuario >= hq.idade) {
      let atendeCategoria = false;
      // Verifica se a HQ corresponde a alguma das categorias de preferência
      if (
        (gostaSuperHeroiAcao && (hq.categorias.includes("super-herói") || hq.categorias.includes("ação"))) ||
        (gostaFantasiaFiccao && (hq.categorias.includes("fantasia") || hq.categorias.includes("ficção científica"))) ||
        (gostaDramaHistorico && (hq.categorias.includes("drama") || hq.categorias.includes("histórico"))) ||
        (gostaHumorInfantil && (hq.categorias.includes("humor") || hq.categorias.includes("infantil") || hq.categorias.includes("cotidiano")))
      ) {
        atendeCategoria = true;
      }

      let atendeEditora = false;
      // Verifica se a HQ corresponde a alguma das preferências de editora
      if (prefereMarvel && hq.categorias.includes("marvel")) {
        atendeEditora = true;
      } else if (prefereDC && hq.categorias.includes("dc")) {
        atendeEditora = true;
      } else if (prefereOutrasEditoras && (!hq.categorias.includes("marvel") && !hq.categorias.includes("dc"))) {
        // Se a HQ não for Marvel nem DC, e o usuário prefere outras editoras
        atendeEditora = true;
      } else if (!prefereMarvel && !prefereDC && !prefereOutrasEditoras) {
        // Se o usuário não tem preferência por editora, todas as HQs são válidas nesse critério
        atendeEditora = true;
      }


      // Adiciona a HQ se atender aos critérios de categoria E editora (ou se não houver preferência de editora)
      if (atendeCategoria && atendeEditora) {
        hqsRecomendadas.push(hq.nome);
      }
    }
  }

  if (hqsRecomendadas.length > 0) {
    text("HQs recomendadas para você:", 20, 70);
    // Para listar as HQs sem duplicatas e de forma mais organizada
    const hqsUnicas = [...new Set(hqsRecomendadas)];
    for (let i = 0; i < hqsUnicas.length; i++) {
      text("- " + hqsUnicas[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhuma HQ disponível para sua idade e preferências.", 20, 70);
  }
}
