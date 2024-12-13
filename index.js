const express = require('express');
const app = express();
const supabaseClient = require('@supabase/supabase-js');
const port = 3000;
const bodyParser = require('body-parser');

const supabaseUrl = 'https://akeagsmhttfgmwpcetpn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZWFnc21odHRmZ213cGNldHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NjM2NzksImV4cCI6MjA0OTUzOTY3OX0.gyjZQYH_ST9ct4MMV8kuKFyiQPnP4pK4As6lekyZIsU';

const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

app.get('/cities', async (req, res) => {
    const { data, error } = await supabase
        .from('cities')
        .select('*');

    console.log('Data: ', data);
    console.log('Error: ', error);
    res.send(data);
});

app.post('/city', (req, res) => {
    console.log('POST request received at /city');
    console.log('Request body:', req);
    res.send('Hello from the server!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    });

