((state, timeLeftFn) => {
    const http = require('http');
    let command;
    http.get('http://wombackend.herokuapp.com/', res => {
        res.on('data', data => { 
            command = JSON.parse(data);
            return { command, state: {} }
        })
    });
});
