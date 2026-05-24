export const validarResultadosDosTestes = (listaDeResultadosDeTeste) => {

    if (listaDeResultadosDeTeste == 0) {
        return { totalSucessos: 0, totalFalhas: 0, passRate: 0, status: 'Houve um erro na geração da lista!' }
    }

    // Total de sucessos
    let totalSucessos = calcularSucessos(listaDeResultadosDeTeste)

    // Total de falhas
    let totalFalhas = calcularFalhas(listaDeResultadosDeTeste, totalSucessos)

    // Calcular pass rate
    let passRate = calculaPassRate(listaDeResultadosDeTeste, totalSucessos)

    // Validar status
    let status = obterStatus(passRate)

    return {
        totalSucessos,
        totalFalhas,
        passRate: `${passRate}%`,
        status
    }

};

const calcularSucessos = (listaDeResultadosDeTeste) => {
    let totalSucessos = 0;

    for (let i = 0; i < listaDeResultadosDeTeste.length; i++) {
        if (listaDeResultadosDeTeste[i] == 'pass') {
            totalSucessos++;
        }
    };

    return totalSucessos
}

const calcularFalhas = (listaDeResultadosDeTeste, totalSucessos) => {

    return listaDeResultadosDeTeste.length - totalSucessos
}

const calculaPassRate = (listaDeResultadosDeTeste, totalSucessos) => {

    return (totalSucessos / listaDeResultadosDeTeste.length) * 100
}

const obterStatus = (passRate) => {

    let status = ''

    if (passRate <= 50) {
        status = 'Bah! Senta aqui jovem!'
    }
    else if (passRate <= 89) {
        status = 'Perigo'
    }
    else if (passRate <= 99) {
        status = 'Aceitável'
    }
    else {
        status = 'Rebeca Approved!'
    }

    return status
}