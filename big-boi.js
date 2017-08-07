((state, timeLeftFn) => {
    let command;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://wombackend.herokuapp.com', false);
    xhr.send();
//    http.get('http://wombackend.herokuapp.com/', res => {
//        res.on('data', data => { 
//            command = JSON.parse(data);
//            return { command, state: {} }
//        })
//    });
});
