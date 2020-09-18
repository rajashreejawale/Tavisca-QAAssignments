/* Write a simple Javascript program to print "Welcome {{Your Name}} to tavisca."
Note: Execute this code on Chrome browser console */

//Get username as input from user
function welcomeMessage(name) {
    return `Welcome ${name} to Tavisca`;
    }

var name1 = `D'souza`;
     console.log(welcomeMessage(name1));
module.exports = welcomeMessage; 