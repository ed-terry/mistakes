import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { loadMistakes, saveMistakes } from '../utils/storage';

export function deleteCommand(program: Command): void {
    program
        .command('delete [id]')
        .option('--all', 'Delete all mistakes (with confirmation)')
        .description('Delete a mistake or all mistakes')
        .action(async (id: any, options: any) => {
            try {
                const mistakes = loadMistakes();

                if (mistakes.length === 0) {
                    console.log(chalk.yellow('\n📭 No mistakes to delete!\n'));
                    return;
                }

                if (options.all) {
                    const confirmed = await inquirer.prompt([
                        {
                            type: 'confirm',
                            name: 'confirm',
                            message: chalk.red(
                                `Are you sure you want to delete all ${mistakes.length} mistakes? This cannot be undone!`
                            ),
                            default: false
                        }
                    ]);

                    if (confirmed.confirm) {
                        saveMistakes([]);
                        console.log(chalk.green.bold('\n✅ All mistakes deleted!\n'));
                    } else {
                        console.log(chalk.dim('\n❌ Deletion cancelled.\n'));
                    }
                } else if (id) {
                    const mistakeIndex = mistakes.findIndex((m) => m.id === id);

                    if (mistakeIndex === -1) {
                        console.log(chalk.red(`\n❌ Mistake with ID "${id}" not found!\n`));
                        return;
                    }

                    const mistake = mistakes[mistakeIndex];
                    const confirmed = await inquirer.prompt([
                        {
                            type: 'confirm',
                            name: 'confirm',
                            message: chalk.red(
                                `Delete this mistake: "${mistake.description.substring(0, 50)}"?`
                            ),
                            default: false
                        }
                    ]);

                    if (confirmed.confirm) {
                        mistakes.splice(mistakeIndex, 1);
                        saveMistakes(mistakes);
                        console.log(chalk.green.bold('\n✅ Mistake deleted!\n'));
                    } else {
                        console.log(chalk.dim('\n❌ Deletion cancelled.\n'));
                    }
                } else {
                    console.log(
                        chalk.red('\n❌ Please provide a mistake ID or use --all flag\n')
                    );
                }
            } catch (error) {
                console.error(chalk.red('Error deleting mistake:'), error);
                process.exit(1);
            }
        });
}
