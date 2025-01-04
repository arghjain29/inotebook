const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()
const port = 5000

app.use(cors({
  origin: "https://inotebookfront.vercel.app",
  methods: ['GET', 'POST'],
  credentials: true
}))
app.use(express.json());


//* Available routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`I-Notebook Backend listening on port ${port}`)
})