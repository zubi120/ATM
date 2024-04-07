#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "what do you want to do?",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`your remianing balance is ${balance}`);
        }
        else {
            console.log(`"you have insufficent balance`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is ${myBalance}`);
    }
    else if (operationAns.operation == "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
        if (fastCashAns.amount <= myBalance) {
            let balance2 = myBalance - fastCashAns.amount;
            console.log(`your remianing balance ${balance2}`);
        }
        else {
            console.log(`you have insufficent amount`);
        }
    }
}
else {
    console.log("Incorrect Pin Code");
}
