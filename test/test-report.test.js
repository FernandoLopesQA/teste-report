import assert from 'node:assert';
import { validarResultadosDosTestes } from '../src/test-report.js';

describe('Validação dos Resultados de Teste', () => {

    describe('Validações negativas', () => {

        it('75% deve retornar o Status de Perigo', () => {
            // Arrange - Organiza
            const resultadoDosTestes = ['pass', 'fail', 'pass', 'pass']
            const resultadoEsperado = { totalSucessos: 3, totalFalhas: 1, passRate: '75%', status: "Perigo" }

            // Act - Age/Executa Ação
            const retorno = validarResultadosDosTestes(resultadoDosTestes)

            //Assert - Verifica/Valida/assert -- deepequal
            //  valida todo o conteúdo do objeto
            assert.deepEqual(resultadoEsperado, retorno)
        });

        it('0% deve retornar o Status Bah! Senta aqui jovem', () => {
            // Arrange - Organiza
            const resultadoDosTestes = ['fail', 'fail']
            const resultadoEsperado = { totalSucessos: 0, totalFalhas: 2, passRate: '0%', status: "Bah! Senta aqui jovem!" }

            // Act - Age/Executa Ação
            const retorno = validarResultadosDosTestes(resultadoDosTestes)

            //Assert - Verifica/Valida/assert -- deepequal
            //  valida todo o conteúdo do objeto
            assert.deepEqual(resultadoEsperado, retorno)
        });

    });

    describe('Validações positivas', () => {

        it('0% deve retornar o Aceitável', () => {
            // Arrange - Organiza
            const resultadoDosTestes = ['pass', 'fail', 'pass', 'pass', 'pass', 'pass', 'pass', 'pass', 'pass', 'pass']
            const resultadoEsperado = { totalSucessos: 9, totalFalhas: 1, passRate: '90%', status: "Aceitável" }

            // Act - Age/Executa Ação
            const retorno = validarResultadosDosTestes(resultadoDosTestes)

            //Assert - Verifica/Valida/assert -- deepequal
            //  valida todo o conteúdo do objeto
            assert.deepEqual(resultadoEsperado, retorno)
        });

        it('0% deve retornar o Status Rebeca Approved!', () => {
            // Arrange - Organiza
            const resultadoDosTestes = ['pass', 'pass']
            const resultadoEsperado = { totalSucessos: 2, totalFalhas: 0, passRate: '100%', status: "Rebeca Approved!" }

            // Act - Age/Executa Ação
            const retorno = validarResultadosDosTestes(resultadoDosTestes)

            //Assert - Verifica/Valida/assert -- deepequal
            //  valida todo o conteúdo do objeto
            assert.deepEqual(resultadoEsperado, retorno)
        });

        it('Lista vazia', () => {
            // Arrange - Organiza
            const resultadoDosTestes = []
            const resultadoEsperado = { totalSucessos: 0, totalFalhas: 0, passRate: 0, status: "Houve um erro na geração da lista!" }

            // Act - Age/Executa Ação
            const retorno = validarResultadosDosTestes(resultadoDosTestes)

            //Assert - Verifica/Valida/assert -- deepequal
            //  valida todo o conteúdo do objeto
            assert.deepEqual(resultadoEsperado, retorno)
        });

    });
});


