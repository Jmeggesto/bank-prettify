var inquirer = require('inquirer');

var window, answers;

function start() {
    if(!window || !answers){
        return;
    }

    window.document.getElementById('onlineId1').value = answers.username;
    window.document.getElementById('passcode1').value = answers.password;
    window.document.getElementById('hp-sign-in-btn').dispatchEvent(new window.MouseEvent('click', {
        'view' : window,
        'bubbles' : true,
        'cancelable' : false
    }));
    
}
inquirer.prompt(
    [
        {name: 'username', message: 'Username: '},
        {type: 'password', name: 'password', message: 'Password: '}
    ]
).then(function(_answers){

    answers = _answers;
    start();

});

