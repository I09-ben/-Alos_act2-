const express = require('express')
const app = express()
const db = require('./db.json')

app.use(express.json())

app.get('/db', (req,res) => {
    res.send("Liste des db")
})

app.get('/db', (req,res) => {
    res.status(200).json(db)
})

app.get('/db/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const db = db.find(db => db.id === id)
    res.status(200).json(db)
})

app.post('/db', (req,res) => {
    db.push(req.body)
    res.status(200).json(db)
})
app.put('/db/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let db = db.find(db => db.id === id)
    db.email =req.body.email,
    db.username =req.body.username,
    db.profile =req.body.profile,
    db.nom_du_film =req.body.nom_du_film,
    db.annee_de_sortie_du_film =req.body.annee_de_sortie_du_film,
    db.duree_du_film =req.body.duree_du_film,
    db.genre_de_film =req.body.genre_de_film,
    db.histoire_du_film =req.histoire_du_film,
    res.status(200).json(db)
})

app.delete('/db/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let db= db.find(db => db.id === id)
    db.splice(db.indexOf(db),1)
    res.status(200).json(db)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})