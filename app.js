const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')


const app = express()
app.use(express.static('public'));
app.use(express.static('contact'));


const port = 5000


// Set Templating Enginge
app.set('view engine', 'ejs')




const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Navigation
app.get('', (req, res)=> {
    res.render('index')
})

app.get('/contact', (req, res)=> {
    res.render('contact')
})

app.post('/contact',urlencodedParser,[
    check('name', 'Need name ')
    .exists(),
    check('email', 'Email is not valid')
    .isEmail()
    .normalizeEmail()

],(req, res)=>{
   
const errors = validationResult(req)
if (!errors.isEmpty()){
    const alert = errors.array()
    res.render('contact', {
        alert
})
}




})

app.listen(port, () => console.info(`App listening on port: ${port}`))