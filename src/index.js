import express from 'express'
import bodyParser from 'body-parser'
import thing from './routes/thing';

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/', thing)

app.listen(3000, () => console.log('Example app listening on port 3000!'))