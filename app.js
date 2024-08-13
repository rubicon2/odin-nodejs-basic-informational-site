const express = require('express');

// Setup
const app = new express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(8080, () => console.log('Listening for requests on port 8080'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/contact-me', (req, res) => {
  res.render('contact-me', { title: 'Contact Me' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
