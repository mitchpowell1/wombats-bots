const http = require('http');
((state, timeLeftFn) => {
    let command;
    http.get('http://wombackend.herokuapp.com/', res => {
        res.on('data', data => { 
            command = JSON.parse(data);
            return { command, state: {} }
        })
    });
});
