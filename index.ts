/*
Word Counter
The user will enter a english paragraph and all that is needed is to just to implement counting characters and words without whitespaces.

Create a GitHub repository for the project and submit its URL in the project submission form.
*/

import inquirer from "inquirer";
import chalk from "chalk";

// Prompt user for input
inquirer
    .prompt([
        {
            name: "text",
            message: "Enter some text:",
        },
    ])
    .then((answers: { text: string }) => {
        const text = answers.text;

        let charCount = text.length;
        let wordCount = text.split(/\s+/).length;

        console.log(chalk.blue(`Character count: ${charCount}`));
        console.log(chalk.green(`Word count: ${wordCount}`));
    });
