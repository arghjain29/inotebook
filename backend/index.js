const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

const app = express()
const port = 5000

app.use(cors({
  origin: "https://inotebookfront.vercel.app",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Handle preflight requests (OPTIONS)
app.options('*', cors());

app.use(express.json());

connectToMongo();

//* Available routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`I-Notebook Backend listening on port ${port}`)
})