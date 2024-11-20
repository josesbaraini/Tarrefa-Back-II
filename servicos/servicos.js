import  dados  from '../dados/dados.js';
// import historicoInflacao from '../dados/dados.js';

export const retornaColecaoCompleta = () => {
    return dados;
}

export const retornaPorAno = (ano) => {
    let resultado = parseInt(ano)>2014 && parseInt(ano)<2024? parseInt(ano): null ;
    resultado = resultado ?dados.filter(dado => dado.ano === resultado):"Ano invalido"
    return resultado ;
}

export	const retornaPorId = (id) => {
    const idipca = Number(id);
    return dados.find(dado => dado.id === idipca);
}

export const retornaIpcaAcumulado = (valorInicial,mesInicial,mesFinal,anoInicial,anoFinal) => {
    let IpcaAcumulado = 1
    let IpcaAtual;
    const idInicial = (dados.find(dado => dado.mes === mesInicial && dado.ano === anoInicial)).id
    const idFinal = (dados.find(dado => dado.mes === mesFinal && dado.ano === anoFinal)).id
    for (let index = idInicial; index <= idFinal; index++) {
            if (index===62){
                index=63
            }
            IpcaAtual = (1+((dados.find(dado => dado.id === index)).ipca)/100)

            console.log(index)
            IpcaAcumulado = IpcaAcumulado * IpcaAtual


    
            


        
    }
    return `R$${((valorInicial*IpcaAcumulado).toFixed(2)).replace(".",",")}`
}


