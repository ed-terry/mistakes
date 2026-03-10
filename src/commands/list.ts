import { Command } from 'commander';
import chalk from 'chalk';
import { loadMistakes } from '../utils/storage';
import { isDateInRange, getSeverityLevel, formatDate } from '../utils/helpers';

export function listCommand(program: Command): void {
    program
        .command('list')
        .description('List all mistakes or filter by date')
        .option('--date <date>', 'Filter by date (YYYY-MM or YYYY-MM-DD)')
        .option('--fixed', 'Show only fixed mistakes')
        .option('--unfixed', 'Show only unfixed mistakes')
        .option('--sort <field>', 'Sort by: date, severity (default: date)')
        .action((options: any) => {
            try {
                const mistakes = loadMistakes();

                if (mistakes.length === 0) {
                    console.log(
                        chalk.yellow('\nNo mistakes recorded yet. Begin your journal.\n')
                    );
                    return;
                }

                let filtered = [...mistakes];

                // Date filter
                if (options.date) {
                    filtered = filtered.filter(m => isDateInRange(m.date, options.date));
                }

                // Fixed/Unfixed filter
                if (options.fixed) {
                    filtered = filtered.filter(m => m.fixed);
                } else if (options.unfixed) {
                    filtered = filtered.filter(m => !m.fixed);
                }

                // Sort
                if (options.sort === 'severity') {
                    filtered.sort((a, b) => b.severity - a.severity);
                } else {
                    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                }

                if (filtered.length === 0) {
                    console.log(chalk.yellow('\nNo mistakes found matching your criteria.\n'));
                    return;
                }

                console.log(chalk.cyan.bold(`\nYour Mistakes (${filtered.length} total):\n`));

                filtered.forEach((mistake, index) => {
                    const fixedBadge = mistake.fixed ? chalk.green('FIXED') : chalk.red('UNFIXED');
                    const dateStr = chalk.gray(mistake.date.split(' ')[0]);
                    const severity = getSeverityLevel(mistake.severity);

                    console.log(chalk.white(`${index + 1}. [${severity}] ${chalk.bold(mistake.description)}`));
                    console.log(chalk.gray(`   ${dateStr} | Level: ${mistake.severity}/5 | ${fixedBadge}`));

                    if (mistake.lesson) {
                        console.log(chalk.yellow(`   📚 Lesson: ${mistake.lesson}`));
                    }

                    if (mistake.tags && mistake.tags.length > 0) {
                        console.log(chalk.cyan(`   🏷️  Tags: ${mistake.tags.join(', ')}`));
                    }

                    console.log();
                });
            } catch (error) {
                console.error(chalk.red('Error listing mistakes:'), error);
                process.exit(1);
            }
        });
}
