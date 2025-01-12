const express = require('express');
const app = express();  

app.use(express.json()); 

const movies = [
    { id: 1, title: 'Superman' },
    { id: 2, title: 'Thor' },
    { id: 3, title: 'Iron Man' }
];

app.get('/api/movies', (req, res) => {
    res.send(movies);
});

app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
});

app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    };
    movies.push(movie);
    res.send(movie);
});