import schema from './schema';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';
import express from 'express';

let app = express();
let port = 4002;
// app.post('/no-graphql', (req, res) => {
//     res.send('POST-response');
// });
//використаємо підключений модуль 'body-parser'
app.use(bodyParser.text({
    type: 'application/graphql'
}));
//замінемо попередній виклик методу наступним
app.post('/graphql', (req, res) => {
    graphql(schema, req.body).then(
        (result) => {
            res.send(JSON.stringify(result, null, 2));
        }
    );
});
let server = app.listen(port, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('No-graphQL is listening at http://%s:%s', host, port);
});
