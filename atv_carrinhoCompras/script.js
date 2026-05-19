// Array de produtos
const produtos = [
    {
        nome: "Mouse Gamer",
        preco: 45.90
    },

    {
        nome: "Teclado Mecânico",
        preco: 120.00
    },

    {
        nome: "Headset",
        preco: 80.50
    },

    {
        nome: "Mouse Pad",
        preco: 25.00
    },

    {
        nome: "Webcam",
        preco: 60.00
    }
];

let carrinho = [];

let carrinhoVazio = true;

const listaProdutos = document.querySelector("#lista-produtos");
const listaCarrinho = document.querySelector("#carrinho");
const totalElemento = document.querySelector("#total");
const filtro = document.querySelector("#filtro");

function listarProdutos(lista) {

    listaProdutos.innerHTML = "";

    lista.forEach((produto) => {

        const card = document.createElement("div");
        card.classList.add("produto");

        const nome = document.createElement("h3");
        nome.textContent = produto.nome;

        const preco = document.createElement("p");
        preco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        const botao = document.createElement("button");
        botao.textContent = "Adicionar ao Carrinho";

        botao.addEventListener("click", () => {
            adicionarAoCarrinho(produto);
        });

        card.appendChild(nome);
        card.appendChild(preco);
        card.appendChild(botao);

        listaProdutos.appendChild(card);
    });
}

function adicionarAoCarrinho(produto) {

    const itemExistente = carrinho.find(
        item => item.nome === produto.nome
    );

    if (itemExistente) {

        itemExistente.quantidade++;

    } else {

        carrinho.push({
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
        });
    }

    carrinhoVazio = false;

    atualizarCarrinho();
    salvarCarrinho();
}

function removerDoCarrinho(nomeProduto) {

    const item = carrinho.find(
        item => item.nome === nomeProduto
    );

    if (item.quantidade > 1) {

        item.quantidade--;

    } else {

        carrinho = carrinho.filter(
            item => item.nome !== nomeProduto
        );
    }

    if (carrinho.length === 0) {
        carrinhoVazio = true;
    }

    atualizarCarrinho();
    salvarCarrinho();
}

function atualizarCarrinho() {

    listaCarrinho.innerHTML = "";

    carrinho.forEach((item) => {

        const card = document.createElement("div");
        card.classList.add("item-carrinho"); 

        const nome = document.createElement("h3");
        nome.textContent = item.nome;

        const quantidade = document.createElement("p");
        quantidade.textContent =
            `Quantidade: ${item.quantidade}`;

        const precoTotal = document.createElement("p");
        precoTotal.textContent =
            `Total do item: R$ ${(item.preco * item.quantidade).toFixed(2)}`;

        const botaoAdicionar = document.createElement("button");
        botaoAdicionar.textContent = "+";

        botaoAdicionar.addEventListener("click", () => {
            adicionarAoCarrinho(item);
        });

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";

        botaoRemover.addEventListener("click", () => {
            removerDoCarrinho(item.nome);
        });

        card.appendChild(nome);
        card.appendChild(quantidade);
        card.appendChild(precoTotal);
        card.appendChild(botaoAdicionar);
        card.appendChild(botaoRemover);

        listaCarrinho.appendChild(card);
    });

    atualizarTotal();
}

function atualizarTotal() {

    let total = 0;

    for (let i = 0; i < carrinho.length; i++) {

        total +=
            carrinho[i].preco *
            carrinho[i].quantidade;
    }

    totalElemento.textContent =
        `Total: R$ ${total.toFixed(2)}`;
}

function salvarCarrinho() {

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );
}

function carregarCarrinho() {

    const dados = localStorage.getItem("carrinho");

    if (dados) {

        carrinho = JSON.parse(dados);

        if (carrinho.length > 0) {
            carrinhoVazio = false;
        }

        atualizarCarrinho();
    }
}

function filtrarProdutos() {

    const valorFiltro = filtro.value;

    let produtosFiltrados = [];

    switch (valorFiltro) {

        case "ate50":

            produtosFiltrados = produtos.filter(
                produto => produto.preco <= 50
            );

            break;

        case "acima50":

            produtosFiltrados = produtos.filter(
                produto => produto.preco > 50
            );

            break;

        default:

            produtosFiltrados = produtos;

            break;
    }

    listarProdutos(produtosFiltrados);
}

filtro.addEventListener("change", filtrarProdutos);

window.addEventListener("DOMContentLoaded", () => {

    listarProdutos(produtos);

    carregarCarrinho();
});