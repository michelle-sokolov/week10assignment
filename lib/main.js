//manager questions
    //"please enter manager's name."
    //"please enter manager's email address."
    //"please enter manager's id."
    //"please enter manager's office number."

//list question - is this employee an: engineer | intern    
    //engineer questions
        //"please enter engineer's name."
        //"please enter engineer's email address."
        //"please enter engineer's id."
        //"please enter engineer's github." 
    //OR
    //intern questions
        //"please enter intern's name."
        //"please enter intern's email address."
        //"please enter intern's id."
        //"please enter intern's school."                        
    //list question - would you like to enter another employee? yes | no    

var inquirer = require("inquirer");

inquirer
.prompt([
    {type:'input', name:'managerName', message:"please enter manager's name."},
    {type:'input', name:'managerEmail', message:"please enter manager's email address."}, 
    {type:'input', name:'managerOffice', message:"please enter manager's office number."},
    {type:'input', name:'managerId', message:"please enter manager's ID."},
])   
.then(answers => {
   return "Our manager is " + managerName +", their email is " + managerEmail +", and their office is " +managerOffice +"."
});      

    /*{type:'list', name:'employeeType', message:"is this employee an: ", choices: ["Engineer", "Intern"]},
    {type:'input', name:'engineerName', message:"please enter engineer's name"},
    {type:'input', name:'engineerEmail', message:"please enter engineer's email address"},
    {type:'input', name:'engineerId', message:"please enter engineer's ID"},
    {type:'input', name:'engineerGithub', message:"please enter engineer's github"},
    {type:'input', name:'internName', message:"please enter intern's name"},
    {type:'input', name:'internEmail', message:"please enter intern's email address"},
    {type:'input', name:'internId', message:"please enter intern's ID"},
    {type:'input', name:'internSchool', message:"please enter intern's school"}
    ]) */

