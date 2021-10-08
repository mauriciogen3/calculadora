//condicionais if - else

//menores de 18 --> Menor de idade (meia)
//Entre 18 e 60 anos -> Adulto(meia apenas com caaarteirinha)
//maiores de 60 anos - > idoso(meia)


const idade = 35;
const temCarteirinha = false;

if(idade<18){
  //menor de idade
  console.log("MEIA")

}else if(idade<=60){

  if(temCarteirinha==true){
    //adulto com carteirinha
    console.log("MEIA")

  }else{
    console.log("INTEIRA")
  }
  
  
}else{
  //idosa
  console.log("MEIA")

}