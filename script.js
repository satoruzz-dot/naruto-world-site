const vips = [
  {
    nome: "Byakugan",
    preco: "R$10,00",
    emoji: "<:Byakugan:1309762706869456936>",
    sobre: `• Espada Customizada
• 2 Spins de Clan
• 2,5k de Chakra
• (2) Ryos de 1.000, (5) Ryos de 100, (32) Carnes`
  },
  {
    nome: "Sharingan",
    preco: "R$15,00",
    emoji: "<:Sharingan:1309766632922681375>",
    sobre: `• Espada Uchiha
• 3 Spins de Clan
• 5k Chakra
• Armadura Uchiha
• (6) Ryos 1.000, (10) Ryos 100, (2) Ramen, (2) Bolinho de arroz, (64) Carnes`
  },
  {
    nome: "Hoshigaki",
    preco: "R$20,00",
    emoji: "<:Hoshigaki:1309990666490876034>",
    sobre: `• Espada e Armadura Hoshigaki
• 4 Spins de Clan
• 10k Chakra
• Jutsu de Água
• Muitos Ryos, Ramen, Bolinhos e Pílulas`
  },
  {
    nome: "Marca",
    preco: "R$30,00",
    emoji: "<:Marca:1310014535058329661>",
    sobre: `• Espada e Armadura Marca
• 6 Spins de Clan
• 15k Chakra
• Item aleatório
• 1 Slot extra de Genkai
• Muitos Ryos, Carnes, Pílulas, Ramen, Bolinhos`
  },
  {
    nome: "Ootsutsuki",
    preco: "R$50,00",
    emoji: "<:RinneSharingan:1310019665270935632>",
    sobre: `• Clã Ootsutsuki Garantido + Slot extra
• Espada e Armadura Ootsutsuki
• 8 Spins de Clan
• 30k Chakra
• Gigantesco bônus de Ryos, comidas, pílulas
• Suporte prioritário, tester e 50% na loja`
  }
];

let pedidoAtual = {};

function confirmarDados() {
  pedidoAtual.nick = document.getElementById("nick").value;
  pedidoAtual.discord = document.getElementById("discord").value;
  document.getElementById("pagamento").style.display = "block";
}

function criarPedido() {
  const comprovante = document.getElementById("comprovante").files[0];
  if (!comprovante) return alert("Envie o comprovante!");

  const pedidos = JSON.parse(localStorage.getItem("pedidos") || "[]");
  pedidos.push({...pedidoAtual, comprovante: comprovante.name});
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
  alert("Pedido criado com sucesso!");
}

window.onload = () => {
  const vipList = document.getElementById("vip-list");
  vips.forEach(vip => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${vip.emoji} ${vip.nome}</h3><p>${vip.preco}</p>
      <button onclick="document.getElementById('cart-form').style.display='block';pedidoAtual.vip='${vip.nome}'">Adicionar ao Carrinho</button>
      <button onclick="alert('${vip.sobre.replace(/\n/g,'')}')">Sobre</button>`;
    vipList.appendChild(card);
  });
}