const mysql = require("mysql");
const inquirer = require("inquirer");
const console_table = require("console.table");

async function start(){
    const answers = await inquirer.prompt({

        type: "",
        message: "",
        name: "",
    });

    console.log(answers);
}

start();