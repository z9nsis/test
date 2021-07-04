const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars');
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.render('home', {'hello':'123'});
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
