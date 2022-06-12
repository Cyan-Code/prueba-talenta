const appExpress = require('express');
const cors = require('cors');
const app = appExpress();

app.use(cors());
app.use(appExpress.json());
app.use(appExpress.urlencoded({extended: false}));


let words = [];

app.post('/', (req, res) => {
    const {data} = req.body;
    words.push(data);
    return res.json(words);
});

app.get('/', (req, res) => {
    return res.json(words)
});

app.listen(8080);
