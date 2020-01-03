// Dependencies

const mysql = require("mysql");
const inquirer = require("inquirer");
const console_table = require("console.table");

// Establish server & PORT

const connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "tracker_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {
  inquirer
    .prompt({
      type: "list",
      name: "option",
      message: "What would you like to do?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Department",
        "View Role",
        "View Employee",
        "Update Employee Role",
        "Exit"
      ]
    })

    .then(function(result) {
      console.log("You entered: " + result.option);
      switch (result.option) {
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployees();
          break;
        case "View Department":
          viewDepartment();
          break;
        case "View Role":
          viewRole();
          break;
        case "View Employee":
          viewEmployee();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}

function addDepartment() {
 
  inquirer
    .prompt({
      type: "input",
      message: "What is the name of the department?",
      name: "department"
    })
    .then(function(res) {
      const department = res.department;

      const query = `INSERT INTO department (name) VALUES("${department}")`;
      connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}
