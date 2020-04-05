// usei o express para criar e configurar o meu servidor
const express = require("express")
const server = express()

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de programação",
    category:"Estudo",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sunt earum sed",
    url:"http://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2761/2761891.svg",
    title: "Exercicio",
    category:"Saúde",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sunt earum sed",
    url:"http://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2741/2741113.svg",
    title: "Jogar online",
    category:"Lazer em Familia",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sunt earum sed",
    url:"http://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de programação 2",
    category:"Educação",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sunt earum sed",
    url:"http://rocketseat.com.br"
  },
]

// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server,
  noCache: true,
})

// criei uma rota "/"
// capturei o pedido do cliente(front-end) para responder
server.get("/",function(req, res){ 
  const reversedIdeas = [...ideas].reverse()
  const lastIdeas = []
  for(let idea of reversedIdeas){
    if(lastIdeas.length < 3){
      lastIdeas.push(idea)
    }
  }

  return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias",function(req, res){

  const reversedIdeas = [...ideas].reverse()

  return res.render("ideias.html", { ideas :  reversedIdeas})
})

// leguei meu servidor na porta 3000
server.listen(3000)