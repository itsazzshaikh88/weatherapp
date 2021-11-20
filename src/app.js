const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8000;

// path config
const path_to_public_folder = path.join(__dirname, "../public");
const temp_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set('views', temp_path)
app.use(express.static(path_to_public_folder));
hbs.registerPartials(partial_path);

app.get("/", (req,res) => {
    res.render('index');
});
app.get("/about", (req,res) => {
    res.render('about');
});
app.get("/weather", (req,res) => {
    res.render('weather');
});
app.get("*", (req,res) => {
    res.render('notfound');
});
app.listen(port, () => {
    console.log(`Listening to Port # ${port}`);
})