const appExpress = require('express');
const cors = require('cors');

const app = appExpress();
app.use(cors());
app.use(appExpress.json());
app.use(appExpress.urlencoded({extended: false}));
app.post('/', (req, res) => {
    const body = req.body
    console.log('body', body)
    res.json(req.body);
})
app.listen(8080);
