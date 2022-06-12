const express = require('express')
const res = require('express/lib/response')
const app = express()
var cors = require('cors')
const port = 5000

//middleware use
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World, nodemon running!')
})

const users=[
  {id:1, name:'rabbil', email:'raj@gmail.com'},
  {id:2, name:'raj', email:'raj@gmail.com'},
  {id:3, name:'rajib', email:'raj@gmail.com'},
]

app.get('/users', (req, res)=>{
  const search = req.query.search;
  if(search){
    const searchRes = users.filter(user =>user.name.toLocaleLowerCase().includes(search))
    res.send(searchRes)
  }
  else{
    res.send(users)
  }
  
})

app.get('/users/:id', (req, res)=>{
  const id = req.params.id;
  const user = users[id];
  res.send(id);
})

//app.post method
app.post('/users', (req,res)=>{
  const newUser = req.body;
  const len = users.length;
  newUser.id = len+1;
  users.push(newUser);
  console.log("Hitting post",req.body)
  res.json(newUser)
})



app.get('/fruits/mangoes', (req, res)=>{
  res.send(['himsagor','fazli','lanra'])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})