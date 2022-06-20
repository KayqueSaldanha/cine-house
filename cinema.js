
const catalogo = require('./database/catalogo.json')
const fs = require('fs')




///////////////////////////////////////////////////////////




// Adicionar filme

function adicionarFilme (filmes){
    catalogo.push(filmes)
    return catalogo.filme
}    


 
 // BuscarFilme 
 
 const buscarFilme = id => catalogo.find(i => i.codigo===id)     

 

 //alterar Status de EmCartaz
 
 function alterarStatusEmCartaz (id){
 
     let filme = catalogo.find(i => i.codigo===id)
     
     filme.emCartaz = !filme.emCartaz
     
     return filme
 }


 const alterarStatusEmCartaz_2 = (codigo) => {
    for (let i = 0; i < catalogo.length; i++) {
        catalogo[i].codigo == codigo ? catalogo[i].emCartaz = !catalogo[i].emCartaz : '';
    }
}


 // listar Todos Os Filmes

 function listarTodosOsFilmes (){

    for (let i=0; i<catalogo.length; i++){
        console.log((catalogo[i]))
    }
 }

 function listarFilmesEmCartaz (){
    
    for (let i=0; i<catalogo.length; i++){
        if (catalogo[i].emCartaz === true){
            console.log(catalogo[i])
        }
    }    
 }




