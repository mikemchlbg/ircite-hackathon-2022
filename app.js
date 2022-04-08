const express = require('express')
const app = express()
const port = 4000
let mustacheExpress = require('mustache express')

app.use(express.json())

app.set('views', './views')
app.set('view engine', 'mustache')

app.engine('html', mustacheExpress())

const { Employee } = require('./db')


// HTTP Routes

app.get('/employees', (req, res) => {
    res.render('view-employees.html')
})

app.get('/element/:id', (req, res) => {
    res.render('edit-employees.html')
})


// --------- API ROUTES

// get list of employee
app.get('api/management/employee', function (req,res){
    Employee.findAll()
    .then(result => {
        res.json({
            'employee': result
        })
    })
})

//get employee by id
app.get('api/management/employee/:id', function (req,res){
    const id = req.params.id 
    Employee.findByPk(id)
    .then(result => {
        if (result) {
            res.json({
                'employee': result
            })
        }
    })
})

// delete employee by id
app.delete('api/management/employee/:id', (req, res) => {
    const id = req.params.id
    Employee.destroy({
        where: {
            id: id
        }
    })
    .then(result => {
        res.json()
    })
})

// Save employee
app.post('api/management/employee', (req, res) => {
    const data = req.body
    Employee.create(data)
    .then(result => {
        res.json({
            'employee': result
        })
    })
})

// update an employee
app.put('api/management/employee/:id', (req, res) => {
    const id = req.params.id
    const data = req.body
    Employee.update(data, {
        where: {
            id: id
        }
    })
    .then(result => {
        res.json({
            'employee': result
        })
    })
})




app.listen(process.env.port || port, function(){
    console.log(`Now listening for requests from port ${port}...`)
})