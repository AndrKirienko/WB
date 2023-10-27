import express from 'express'
const app = express()
app.get('/no-graphql', function (req, res) {
    res.send('get')
})
app.listen(4001, () => console.log('Server 1 is upand running on port 4001!'))

//або закоментований код, або незакоментований

// import express from 'express';
// let app = express();
// let port = 4002;
// app.post('/no-graphql', (req, res) => {
//     res.send('POST-response');
// });
// let server = app.listen(port, () => {
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log('No-graphQL is listening at http://%s:%s', host, port);
// });