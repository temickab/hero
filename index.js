const express = require('express')
const bodyParser = require('body-parser')
const userController = require('./controller/users')
const app = express()
const passport = require('passport')
const morgan = require('morgan')
const cors = require('cors')

// const articles = require('./controller/articles')
// const userController = require('./controller/users')
const methodOverride = require('method-override')

app.use(cors())

app.use('/assets', express.static('assets'))// creating a path for static files had to create an assets file in the html as well as in the css
app.use(bodyParser.urlencoded({ extended: true }))// for getiing post requestbody
app.use(methodOverride('_method'))

// require('./config/passport

app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// The below code is rendering the index.html file
// Routing
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3001, () => {
  console.log('hey')
})
