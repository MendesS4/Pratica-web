// Apenas um pequeno projeto teste e estudos
// PARA RODAR O SERVIDOR 
//entrar no local da pasta pelo cmd 
// digitar "nodemon app.js" no cmd

// Express é um framewok para node que facilita no desenvolvimento de sistemas com node 
// ele aumenta a velecidade do desenvolvimento 
// NPM é um repositorio de pacotes(MAIOR QUE EXISTE)

//express é o modulo(fazendo uma requisição)
const express = require("express")
const app = express()

// Arquivos estaticos
app.use(express.static(__dirname + '/public'));

//Caminho para aplicação

//criando rotas
//ROTA inicial
app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/telaInicial.html")
})

//html e css
app.get("/htmlecss", function(req, res){
    res.sendFile(__dirname + "/views/htmlecss.html")
})

//rota sobre mim
app.get("/sobreMim", function(req, res){ 
    res.sendFile(__dirname + "/views/sobreMim.html")
})

//criando servidor
// ESSA FUNÇÂO DEVE SER A ULTIMA DO CODIGO
app.listen(3000, function (){
console.log("O servidor está rodando! porta do servidor: 3000")

})