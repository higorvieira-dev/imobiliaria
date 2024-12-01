const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    // Salve o e-mail do assinante em um arquivo JSON.
    fs.readFile('subscribers.json', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao processar a inscrição.');
        }

        const subscribers = JSON.parse(data);
        subscribers.push(email);

        fs.writeFile('subscribers.json', JSON.stringify(subscribers), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao processar a inscrição.');
            }
            res.status(200).send('Inscrição bem-sucedida');
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});