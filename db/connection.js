
const mongoose = require('mongoose')
if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/project4')
}

// mongoose.connect('mongodb://localhost/woofingtonpost1', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
