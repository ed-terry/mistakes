import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { loadMistakes, saveMistakes, Mistake } from '../utils/storage';
import { generateId, formatDate, formatDateTime } from '../utils/helpers';

export function addCommand(program: Command): void {
    program
        .command('add')
        .description('Add a new mistake to your journal')
        .action(async () => {
            try {
                console.log(chalk.cyan('\nRecording a mistake...\n'));

                const answers = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'description',
                        message: 'What mistake did you make?',
                        validate: (input) => input.trim().length > 0 || 'Please describe the mistake'
                    },
                    {
                        type: 'slider',
                        name: 'severity',
                        message: 'How serious was this? (1=minor, 5=critical)',
                        default: 3,
                        min: 1,
                        max: 5
                    },
                    {
                        type: 'input',
                        name: 'lesson',
                        message: 'What did you learn from it? (optional)',
                        required: false
                    },
                    {
                        type: 'input',
                        name: 'tags',
                        message: 'Add tags separated by commas (optional, e.g., "spelling,english")',
                        required: false
                    },
                    {
                        type: 'confirm',
                        name: 'fixed',
                        message: 'Have you fixed this issue?',
                        default: false
                    }
                ]);

                const mistakes = loadMistakes();
                const newMistake: Mistake = {
                    id: generateId(),
                    date: formatDateTime(),
                    description: answers.description.trim(),
                    severity: answers.severity,
                    lesson: answers.lesson?.trim() || undefined,
                    tags: answers.tags
                        ? answers.tags.split(',').map((tag: string) => tag.trim().toLowerCase())
                        : undefined,
                    fixed: answers.fixed
                };

                mistakes.push(newMistake);
                saveMistakes(mistakes);

                console.log(
                    chalk.green(
                        '\nMistake recorded. This is a step toward growth.\n'
                    )
                );
            } catch (error) {
                console.error(chalk.red('Error adding mistake:'), error);
            }
        });
}
