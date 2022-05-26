const express = require('express');
const cors = require('cors');
const app = express();
const myPort = 8888;

const messages = [];
app.use(cors());
app.use(express.json());

app.post('/messages', (request, response) => {
    const { body } = request;
    console.log(body);
    messages.push(body);
    response.sendStatus(204);
})

app.get('/messages', (request, response) => {
    response.json(messages);
})

app.listen(process.env.PORT || myPort, () => {
    console.log(`App is run :  http://localhost:${myPort}`);
})