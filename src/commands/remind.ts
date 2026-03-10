import { Command } from 'commander';
import chalk from 'chalk';
import { loadMistakes } from '../utils/storage';
import { getSeverityLevel } from '../utils/helpers';

export function remindCommand(program: Command): void {
    program
        .command('remind')
        .option('--quiet', 'Minimal output (for startup reminders)')
        .description('Get reminded of a random past mistake')
        .action((options: any) => {
            try {
                const mistakes = loadMistakes();

                if (mistakes.length === 0) {
                    if (!options.quiet) {
                        console.log(chalk.yellow('\nNo mistakes logged yet. Begin by running "mistake add".\n'));
                    }
                    return;
                }

                const randomMistake = mistakes[Math.floor(Math.random() * mistakes.length)];

                if (options.quiet) {
                    // Minimal output for terminal startup
                    console.log(
                        chalk.dim(
                            `[${randomMistake.date}] ${randomMistake.description.substring(0, 60)}`
                        )
                    );
                } else {
                    // Full reminder display
                    console.log('\n' + chalk.cyan.bold('MISTAKE REMINDER') + '\n');
                    console.log(chalk.dim('━'.repeat(60)));
                    console.log(`${chalk.cyan('Date:')} ${randomMistake.date}`);
                    console.log(`${chalk.cyan('Severity:')} ${getSeverityLevel(randomMistake.severity)} (${randomMistake.severity}/5)`);
                    console.log(`${chalk.cyan('Mistake:')} ${chalk.white(randomMistake.description)}`);

                    if (randomMistake.lesson) {
                        console.log(`${chalk.cyan('Lesson:')} ${chalk.white(randomMistake.lesson)}`);
                    }

                    if (randomMistake.fixed) {
                        console.log(chalk.green('FIXED: This mistake has been corrected.'));
                    }

                    console.log(chalk.dim('━'.repeat(60)) + '\n');
                }
            } catch (error) {
                console.error(chalk.red('Error showing reminder:'), error);
                process.exit(1);
            }
        });
}
