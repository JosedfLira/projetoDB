//console.log("testando nosso package.json com o comando node")

const express = require('express') 
const app = express()

app.listen(3000,function() {
    console.log('O nosso servidor está rodando na porta 3000')
})

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))

app.post('/show', (req,res) => {
    console.log('req.body')
})

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dbUser:dbUser@cluster0.jwmmh.mongodb.net/projetoDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => { const collection = client.db("test").collection("devices");

MongoClient.connect(uri, (err, client) => {
    if(err) return console.log(err)

    db = client.db('teste-bd')

    app.listen(3000, () =>{
        console.log("servidor rodando tranquilo")
    })
})

app.get('/', (req, res) => {
    let cursor = db.collection('crud').find()
}) 

app.get('/show', (req, res) => {
    db.collection('crud').find()toArray((err, results) => {
        if (err) return console.log(err)
        res.render('show.ejs', {crud: results})
    })
})



