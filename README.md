# O Java é Lento?

Essa palestra aborda a performance do Java em diferentes cenários, comparando-o ao Node.js. Utilizando o **ApacheBench (ab)** para simular cargas de trabalho, buscamos responder à pergunta: *"O Java é lento?"*.

---

## Cenários de Teste

1. **Teste Simples**  
   Uma resposta simples é enviada ao cliente:
   - **Java (Spring Boot)**: "Resposta do Spring Boot"
   - **Node.js**: "Resposta simples do Node.js"

2. **Teste Complexo**  
   Um cálculo intensivo é realizado no servidor antes de retornar a resposta.  
   - **Java (Spring Boot)**: Soma de números de 0 a 9.999.999.
   - **Node.js**: Soma de números de 0 a 9.999.999.

---

## Configuração da Máquina

- **Nome do dispositivo**: DESKTOP-U9RV4E2  
- **Processador**: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz  
- **Memória RAM**: 16,0 GB (15,8 GB utilizável)  
- **Sistema Operacional**: Windows 10 Pro (64 bits)
- **Versão do Java**: 21 LTS  
- **JDK**: Temurin  
---

## Resultados dos Testes

### 1. **Teste Simples**

| **Tecnologia** | **Requisições/segundo** | **Tempo médio por requisição (ms)** |
|----------------|-------------------------|-------------------------------------|
| **Node.js**    | 5282.02                | 18.932                              |
| **Java**       | 5186.61                | 19.280                              |

➡️ No cenário simples, **Node.js** foi ligeiramente mais rápido, com maior taxa de requisições por segundo.

---

### 2. **Teste Complexo**

| **Tecnologia** | **Requisições/segundo** | **Tempo médio por requisição (ms)** |
|----------------|-------------------------|-------------------------------------|
| **Java**       | 872.54                 | 114.608                             |
| **Node.js**    | 94.03                  | 1063.477                            |

➡️ No cenário complexo, **Java** apresentou desempenho **quase 10 vezes superior** ao Node.js, demonstrando sua força em cálculos intensivos.

---

## Interpretação dos Resultados

1. **Resposta Simples**:  
   Node.js mostrou um pequeno ganho em operações leves e rápidas. Isso reflete sua arquitetura orientada a eventos e otimizada para E/S.

2. **Cálculo Complexo**:  
   Java se destacou pela eficiência em tarefas computacionalmente pesadas, aproveitando a otimização da JVM (Java Virtual Machine).

---

## Conclusão

- Para tarefas simples e voltadas para E/S, **Node.js** pode ser mais eficiente.
- Para cálculos intensivos e tarefas pesadas, **Java** mostra uma performance superior.

---

### Passos

1. **Inicie o servidor Java**:
   ```bash
   mvn spring-boot:run
