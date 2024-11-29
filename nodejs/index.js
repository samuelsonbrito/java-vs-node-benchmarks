const http = require('http');

// Função que realiza um cálculo intensivo
const heavyCalculation = () => {
    let sum = 0;
    for (let i = 0; i < 10_000_000; i++) {
        sum += i;
    }
    return sum;
};

// Criação do servidor HTTP
const server = http.createServer((req, res) => {
    if (req.url === '/testeComplexo') {
        // Rota /testeComplexo para cálculos intensivos
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Resultado do cálculo complexo: ' + heavyCalculation());
    } else if (req.url === '/testeSimples') {
        // Rota /testeSimples com resposta simples
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Resposta simples do Node.js');
    } else {
        // Rota não encontrada
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Rota não encontrada');
    }
});

// Porta do servidor
const PORT = 8888;

// Inicia o servidor na porta 8888
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log('Acesse:');
    console.log('- http://localhost:8888/testeSimples');
    console.log('- http://localhost:8888/testeComplexo');
});