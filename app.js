const inquirer = require('inquirer')

var managerQuestions = [
    {type:'input', name:'managerName', message:"please enter manager's name."},
    {type:'input', name:'managerEmail', message:"please enter manager's email address."}, 
    {type:'input', name:'managerOffice', message:"please enter manager's office number."},
    {type:'input', name:'managerId', message:"please enter manager's ID."},
    {type:'confirm', name:'newEmployeeQ', message:"Would you like to enter a new Employee"},
]

//if yes to newEmployee
//if no, console log end message
var employeeType = [
    {type:'list', name:'employeeType', message:"is this employee an: ", choices: ["Engineer", "Intern"]},
]
//if Engineer

var engineerQuestions = [
    {type:'input', name:'engineerName', message:"please enter engineer's name"},
    {type:'input', name:'engineerEmail', message:"please enter engineer's email address"},
    {type:'input', name:'engineerId', message:"please enter engineer's ID"},
    {type:'input', name:'engineerGithub', message:"please enter engineer's github"},
    {type:'confirm', name:'newEmployeeQ', message:"Would you like to enter a new Employee"},
]
// intern
var internQuestions = [
    {type:'input', name:'internName', message:"please enter intern's name"},
    {type:'input', name:'internEmail', message:"please enter intern's email address"},
    {type:'input', name:'internId', message:"please enter intern's ID"},
    {type:'input', name:'internSchool', message:"please enter intern's school"},
    {type:'confirm', name:'newEmployeeQ', message:"Would you like to enter a new Employee"},
]
//prompt for newEmployee question again

function employee1(){
    inquirer
    .prompt(employeeType)
    .then(answers => {
    if(answers.employeeType == "Intern"){
        internFunction()
    }   
    else{
        engineerFunction()
    }
});
}

function internFunction(){
    inquirer
    .prompt(internQuestions)
    .then(answers => {
    if(answers.newEmployeeQ){
        employee1()
        }
    });      
}

function engineerFunction(){
    inquirer
    .prompt(engineerQuestions)
    .then(answers => {
        if(answers.newEmployeeQ){
            employee1()
            }
        });      
}

function manager1(){
inquirer
    .prompt(managerQuestions)   
    .then(answers => {
        console.log(answers)
       // document.getElementById("demo").innerHTML = answers.managerName;
        if(answers.newEmployeeQ){
            employee1()
        } 
      });
}
manager1(); 
