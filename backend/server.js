const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var request = require('request');

const app = express()

const clientCreation = require('./routes/clientCreation')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.json({ info: 'Hello There!' })
})


app
  .route('/getIDDocuments')
  .get(clientCreation.getIDDocument);

app
  .route('/getTransactionChannels')
  .get(clientCreation.getTransactionChannels)

app
  .route('/getBranchId')
  .get(clientCreation.getBranchID)

app
  .route('/createClient')

app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})