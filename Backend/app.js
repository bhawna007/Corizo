// Creating  a Server: 
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const PORT = 5000  //#default local server NodeJS
// const PORT = 3000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))


app.get('/', (req, res) => {
    // console.log("Hello Bhawna");
    // res.end()

    res.render(`index`)

})

app.post('/save', (req, res) =>{

    console.log(req.body);
    



})
app.listen(PORT, () => { console.log(`Server is running on Port No: ${PORT}`) })          