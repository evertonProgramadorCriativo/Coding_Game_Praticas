/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
//error 05 168
//error 07 16_  e  21_
//error 09  16X  e 35=
//1sp 1[ 1] 1[ 1] 1[ 1] 1sp 1/ 2sQ 1bS 1sp 1[ 1] 1[ 1] 1[ 1] nl
// está faltando 1sp 78 4sp 78

//error na condição dos 2 numeros saber ser é possitivo ou saber ser é um numero só
const T = readline();
//console.log(T)
//"10sp 5_ nl 9sp 1/ 4sp 1/ 1bS nl 8sp 1/ 4sp 1/ 2sp 1bS nl 7sp 1/ 4sp 1/ 4sp 1bS nl 6sp 1/ 4sp 1/ 2sp 1/ 1bS 2sp 1bS nl 5sp 1/ 4sp 1/ 2sp 1/ 2sp 1bS 2sp 1bS nl 4sp 1/ 4sp 1/ 2sp 1/ 1bS 3sp 1bS 2sp 1bS nl 3sp 1/ 4sp 1/ 2sp 1/ 2sp 1bS 3sp 1bS 2sp 1bS nl 2sp 1/ 4sp 1/ 2_ 1/ 4_ 1bS 3sp 1bS 2sp 1bS nl 1sp 1/ 14sp 1bS 3sp 1bS 2sp 1bS nl 
//1/ 16_ 1bS 3sp 1bS 2sp 1bS nl 
//1bS 21_ 1bS 1sp 1/
let Receita =  {
    sp :" ",
    bs: "\\" ,
    sQ: "'" ,
    nl : "\n"
}
//console.log(T)
let listaDeReceitaOrdenada = T.split(" ")
//console.log(listaDeReceitaOrdenada)
let contagemDeNumero = ["0","1","2","3","4","5","6","7","8","9"]
 
 
let txt = "";
 
  let VerificacaoDeTraducao = "";
for (let x in  listaDeReceitaOrdenada) {
  
 

    function FiltrangemDeNumero(valueA ) {
        let verficandoOPrimerio = listaDeReceitaOrdenada[x]
       // console.log(verficandoOPrimerio) R: 168
       // console.log(verficandoOPrimerio[0] + verficandoOPrimerio[1])
        let resultado = 
          valueA == verficandoOPrimerio[0]     
         verficandoOPrimerio = ""
       //  console.log(resultado)
        return resultado
    }
    function FiltrangemDosDoisNumero(valueA ) {
      let verficandoOPrimerio = listaDeReceitaOrdenada[x]
     // console.log(verficandoOPrimerio) R: 168
     // console.log(verficandoOPrimerio[0] + verficandoOPrimerio[1])
    
     let resultado  = 
        valueA == verficandoOPrimerio[0] || valueA == verficandoOPrimerio[1]    
       verficandoOPrimerio = ""
     //  console.log(resultado) 
      resultado
  

     return resultado
  }
    
    var AchandoPrimeiroNumero = contagemDeNumero.filter(FiltrangemDeNumero);

  
  
  var AchandoOsDoisNumero = contagemDeNumero.filter(FiltrangemDosDoisNumero)
  var TemOComprimentoMaiorQue2

  if(listaDeReceitaOrdenada[x].includes("21_") ) {
    
  if(listaDeReceitaOrdenada[100]) {
 
    AchandoOsDoisNumero = ['2','1']
    } 
  }

  if(listaDeReceitaOrdenada[x].includes("32~") ) {
    
    if(listaDeReceitaOrdenada[207]) {
   
      AchandoOsDoisNumero = ['3','2']
      } 
    }
  if(AchandoOsDoisNumero.length == "2") {
    if( listaDeReceitaOrdenada[x].length >= "3") {
      TemOComprimentoMaiorQue2 = true
    }
    
  } else {
    TemOComprimentoMaiorQue2 = false
  }



//  console.log(SabendoSeN)

  
    var passandoArrayParaString =  AchandoPrimeiroNumero.toString().replaceAll(",","")
    var passandoDoisNumerosArrayParaString =  AchandoOsDoisNumero.toString().replaceAll(",","")

    //console.log(passandoArrayParaString)
    var NumeroMultiplicacao =  parseInt(passandoArrayParaString)
    var NumeroDoisMultiplicacao =  parseInt(passandoDoisNumerosArrayParaString)

    
    //console.log( NumeroDoisMultiplicacao)
    var TraduçãoDoDesenho = Receita.sp.repeat(NumeroMultiplicacao)
    
    VerificacaoDeTraducao = listaDeReceitaOrdenada[x]

     if(VerificacaoDeTraducao.includes("sp")) {
       let numeroMultiplicadoSP = VerificacaoDeTraducao.replace(/sp/g,"");
       let TraduçãoDoDesenhoSP = Receita.sp.repeat(numeroMultiplicadoSP)
      txt += TraduçãoDoDesenhoSP
          // console.log(txt)
      VerificacaoDeTraducao = ""
    

     }else if (VerificacaoDeTraducao.includes("bS")){
        let numeroMultiplicadoBS = VerificacaoDeTraducao.replace(/bS/g,"");
        //console.log(numeroMultiplicadoBS)
       let TraduçãoDoDesenhoBS = Receita.bs.repeat(numeroMultiplicadoBS)

      txt += TraduçãoDoDesenhoBS
    //  console.log(txt)
      VerificacaoDeTraducao = ""
      
 
     }
     else if (VerificacaoDeTraducao.includes("sQ")){
        let numeroMultiplicadoSQ = VerificacaoDeTraducao.replace(/sQ/g,"");
        let TraduçãoDoDesenhoSQ = Receita.sQ.repeat(numeroMultiplicadoSQ)
       txt += TraduçãoDoDesenhoSQ
       //console.log(txt)
       VerificacaoDeTraducao = ""
      
           
     }
     else if (VerificacaoDeTraducao.includes("nl")){
        let numeroMultiplicadoNL = VerificacaoDeTraducao.replace(/nl/g,"");
        let TraduçãoDoDesenhoNL = Receita.nl.repeat(numeroMultiplicadoNL + "1")
       txt += TraduçãoDoDesenhoNL
      //console.log(txt)
       VerificacaoDeTraducao = ""
       
     }
       else {
        //SabendoSeN && AchandoEcessõe
       
        if(TemOComprimentoMaiorQue2) {
        //  console.log("apenas 2 numero")
          var retirandoOsDoisNumero =  listaDeReceitaOrdenada[x].slice(2) //8
          var RepetindoCodigoSemDoisNumerosTraducao = retirandoOsDoisNumero.repeat(NumeroDoisMultiplicacao)
          txt += RepetindoCodigoSemDoisNumerosTraducao
        
          VerificacaoDeTraducao = ""
           
        }
        
        else {
      // console.log("apenas 1 numero")
         //1[
          //NumeroMultiplicacao 1
       var retirandoOPrimeiroNumero =  listaDeReceitaOrdenada[x].slice(1)
       
       var RepetindoCodigoSemTraducao = retirandoOPrimeiroNumero.repeat(NumeroMultiplicacao)
        
       txt += RepetindoCodigoSemTraducao
      
       VerificacaoDeTraducao = ""
        }
        SabendoSeN = ""
        TemOComprimentoMaiorQue2 = ""
       }

}

 
console.log(txt) 


//index 75 [1 , 6]
 
//console.log(SabendoSeN ,AchandoEcessõe)
//RepetindoCodigoSemTraducao
 

 


  //console.log(AchandoOsDoisNumero)

 
 

//console.log(teste0[index]) 
      
   
 //eu querosaber se os 2 primeiros caratecter são index  e saber se exiter o 3 caratec
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

//console.log(` /\\_/\\\n( o.o )\n > ^ <\n  |||`)
