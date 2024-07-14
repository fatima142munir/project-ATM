#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let pinNum = 9966;
let enterPin = await inquirer.prompt([
    {
        message: "Please enter your card pin number",
        type: "number",
        name: "inputPin"
    }
]);
if (enterPin.inputPin === pinNum) {
    let enterOption = await inquirer.prompt([
        {
            message: "Please select option : ",
            type: "list",
            name: "inputOption",
            choices: ["Withdraw", "Fast cash", "Check balance"]
        }
    ]);
    if (enterOption.inputOption === "Withdraw") {
        let enterAmount = await inquirer.prompt({
            message: "Enter amount to withdraw",
            type: "number",
            name: "inputAmount"
        });
        if (enterAmount.inputAmount <= balance) {
            console.log(`Amount withdraw ${enterAmount.inputAmount} only`);
            let remainBalance = balance - enterAmount.inputAmount;
            console.log(`Your Remaining Balance is ${remainBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (enterOption.inputOption === "Fast cash") {
        let fastCashAns = await inquirer.prompt({
            message: "Select any one option",
            type: "list",
            name: "fastAmount",
            choices: ["1000", "3000", "5000", "15000"]
        });
        if (fastCashAns.fastAmount <= balance) {
            console.log(`your remaining balance is ${balance - fastCashAns.fastAmount}`);
        }
        else {
            console.log("You have Insufficient Balance");
        }
    }
    else if (enterOption.inputOption === "Check balance") {
        console.log(`Your Balance is ${balance}`);
    }
    else {
        console.log("ERROR");
    }
}
else {
    console.log("Wrong Pin");
}
