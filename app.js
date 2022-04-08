const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

const { Employee } = require('./db')

// ---------API ROUTES

// get list of employee
app.get('/management/employee', function (req,res){
    Employee.findAll()
    .then(result => {
        res.json({
            'employee': result
        })
    })
})

//get employee by id
app.get('/management/employee/:id', function (req,res){
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
app.delete('/management/employee/:id', (req, res) => {

})

// Save employee
app.post('/management/employee', (req, res) => {

})

// update an employee
app.put('/management/employee/:id', (req, res) => {

})




app.listen(process.env.port || port, function(){
    console.log('Now listening fro requests...')
})