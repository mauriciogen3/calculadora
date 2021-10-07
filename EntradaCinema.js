const idade = 15;

const temCarteirinha = false;

if(idade<18){
    //menor de idade
    console.log("Meia");
} else if(idade <=60){
    //adulta
    if(temCarteirinha ===true){
        //adulta tem carteirinha
        console.log("MEIA")
    } else{
        console.log('Inteira')
    }
} else{
    //idosa
    console.log("Meia");
}