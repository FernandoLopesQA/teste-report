Problema:
Validação dos resultados de teste

A sua ferramenta de teste retornou a lista de resultados da execução de testes. Retorne quantos testes passaram e quantos falharam.
Se o pass rate for inferior a 97%, deve retornar "Perigo!"

Regras
Entrada: A lista de resultados dos testes
Saída: Total de Sucessos, Total de Falhas e Pass Rate

Caso de teste:
Caso 1 - {pass, fail, pass, pass} => TS = 3, TF = 1, PR: 75%, Status: "Perigo" - ok
Caso 2 - {9 pass, 1 fail} => TS = 9, TF = 1, PR: 90%, Status: "Aceitável" - ok
Caso 3 - {pass, fail} => TS = 2, TF = 0, PR: 100%, Status: "Rebeca Approved!" - ok
Caso 4 - {fail, fail} => TS = 0, TF = 0, PR: 0%, Status: "Bah! Senta aqui jovem" - ok