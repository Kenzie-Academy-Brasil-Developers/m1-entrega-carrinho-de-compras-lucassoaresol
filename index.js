const produtos = [
    {
        id: 1,
        nome: "Uva Crimson",
        preco: 44.99
    },
    {
        id: 2,
        nome: "Vinho Canção",
        preco: 17.98
    },
    {
        id: 3,
        nome: "Água de coco",
        preco: 8.99
    },
    {
        id: 4,
        nome: "Mamão",
        preco: 9.98
    },
    {
        id: 5,
        nome: "Água tônica",
        preco: 17.98
    }
]

let body = document.querySelector('body')
let main = document.createElement('main')
let ulTopo = document.createElement('ul')
ulTopo.classList.add('topo')
let litopoEsq = document.createElement('li')
litopoEsq.classList.add('esq')
litopoEsq.innerText = 'Item'
let litopoDir = document.createElement('li')
litopoDir.classList.add('dir')
litopoDir.innerText = 'Valor'
ulTopo.appendChild(litopoEsq)
ulTopo.appendChild(litopoDir)
main.appendChild(ulTopo)
body.appendChild(main)

let total = 0

function listarProdutos (listaProdutos){
    for (let i=0;i<listaProdutos.length;i++){
        let produto = listaProdutos [i]
        let produtoCriado = criarProduto(produto)
        main.appendChild(produtoCriado)
        total = total + produto.preco
    }
}

function criarProduto (produto){
    let nome = produto.nome
    let preco = produto.preco
    let tagul = document.createElement('ul')

    let tagnome = document.createElement('li')
    tagnome.classList.add('esq')
    tagnome.innerText = nome
    let tagpreco = document.createElement('li')
    tagpreco.classList.add('dir')
    tagpreco.innerText = `R$ ${preco}`.replace('.',',')

    tagul.appendChild(tagnome)
    tagul.appendChild(tagpreco)

    return tagul
}

listarProdutos(produtos)

let ulTotal = document.createElement('ul')
ulTotal.classList.add('total')
let litotalEsq = document.createElement('li')
litotalEsq.classList.add('esq')
litotalEsq.innerText = 'Total'
let litotalDir = document.createElement('li')
litotalDir.classList.add('dir')
litotalDir.innerText = `R$ ${total}`.replace('.',',')
ulTotal.appendChild(litotalEsq)
ulTotal.appendChild(litotalDir)
main.appendChild(ulTotal)

let botao = document.createElement('button')
botao.innerText = 'Finalizar compra'
main.appendChild(botao)