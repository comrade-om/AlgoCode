const prompt = require('prompt'); //this dependency needs to be installed through npm

const properties = [
    {
        name: 'firstInteger',
        validator: /[\d]/, //regex to accept only integers
        warning: 'Input should only be an integer' //error message if wrong input inserted
    },
    {
        name: 'secondInteger',
        validator: /[\d]/, //regex to accept only integers
        warning: 'Input should only be an integer'
    },
    {
        name: 'operator',
        validator: /[+\-\*\/\%]/, //regex to accept either of the specified operators
        warning: 'Operator should be either of these: +,-,*,/,%'
    }
];

prompt.start(); //main execution of the program starts

prompt.get(properties, function (error, result) {
    if (error) {
        return onError(error); //program calls the onError function upon error
    }
    console.log("Commandline inputs received");
    console.log("First input: " + result.firstInteger);
    console.log("Second input: " + result.secondInteger);
    console.log("Operator: " + result.operator);
    console.log("Answer is");
    if (result.operator === '+') {
        return console.log(result.firstInteger + " + " + result.secondInteger + " = " + parseInt(result.firstInteger) + parseInt(result.secondInteger));
    } else if (result.operator === '-') {
        return console.log(result.firstInteger + " - " + result.secondInteger + " = " + (parseInt(result.firstInteger) - parseInt(result.secondInteger)));
    } else if (result.operator === '*') {
        return console.log(result.firstInteger + " * " + result.secondInteger + " = " + parseInt(result.firstInteger) * parseInt(result.secondInteger));
    } else if (result.operator === '/') {
        return console.log(result.firstInteger + " / " + result.secondInteger + " = " + parseInt(result.firstInteger) / parseInt(result.secondInteger));
    } else if (result.operator === '%') {
        return console.log(result.firstInteger + " % " + result.secondInteger + " = " + parseInt(result.firstInteger) % parseInt(result.secondInteger));
    } else {
        console.log("Something went wrong, cannot compute answer");
    }
});

function onError(error) {
    console.log(error);
    return 1; //program terminates with printing the error message
}