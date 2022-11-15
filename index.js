//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())
//Tell express to parse JSON in the request body
app.use(express.json())

//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})

const contacts = require('./data/contacts.json')

// console.log(contacts)

app.get('/contacts' , (req, res) => {
    res.json({contacts})
    })

app.get('/contacts/:id', (req,res) => {
    const {id} = req.params;
    const found = contacts.contacts.find((e) => e.id === Number(id))
    res.json(found)
    
})

app.post('/contacts' , (req, res) => {

    const id = contacts.contacts.length + 1
        const newUser = {
            id:id,
            firstName: "James",
            lastName: "Byrne",
            street: "street",
            city: "city",
            type: "work",
            email: "test@test.com",
            linkedin: "https://www.linkedin.com/school/boolean-uk/",
            twitter: "https://twitter.com/booleanuk"
            } 
        contacts.contacts.push(newUser)
        res.json({contacts})
        })

app.delete('/contacts/:id', (req,res) => {
    const {id} = req.params;
    const found = contacts.contacts.find((e) => e.id === Number(id))
    const index = contacts.contacts.indexOf(found)
    contacts.contacts.splice(index, 1)
    res.json(contacts)
    
})

