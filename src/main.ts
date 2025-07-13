import app from '../src/infra/server/server';
// import chalk from 'chalk';

const PORT = 3000;

app.listen( PORT, 
    () => console.log('Servidor rodando em http://localhost:3000'));