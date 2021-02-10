const mongoose = require('mongoose')
 
if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}
 
const password = process.argv[2]
 
const url =
  `mongodb+srv://testi123:${password}@cluster0.deg0q.mongodb.net/testi_123?retryWrites=true&w=majority`
 
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
 
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})
 
const Note = mongoose.model('Note', noteSchema)
 
const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})
 
note.save().then(response => {
  console.log('note saved!')
  mongoose.connection.close()
})