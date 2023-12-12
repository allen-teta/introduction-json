const express = require('express');
const app = express();

// Fetching
app.get('/', (req, res) => {
    res.send('Welcome to Express!');
}); 

// Update
// app.put();

// Patch 
// app.patch();

// Submitn
// app.post(); 

// Delete
// app.delete(); 

const PORT = 6000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
