import { Command } from 'commander';
import chalk from 'chalk';
import { loadMistakes } from '../utils/storage';
import { getSeverityEmoji } from '../utils/helpers';

export function statsCommand(program: Command): void {
    program
        .command('stats')
        .description('Show statistics about your mistakes')
        .action(() => {
            try {
                const mistakes = loadMistakes();

                if (mistakes.length === 0) {
                    console.log(chalk.yellow('\n📭 No mistakes logged yet!\n'));
                    return;
                }

                // Calculate statistics
                const totalMistakes = mistakes.length;
                const fixedMistakes = mistakes.filter((m) => m.fixed).length;
                const unfixedMistakes = totalMistakes - fixedMistakes;
                const avgSeverity = (
                    mistakes.reduce((sum, m) => sum + m.severity, 0) / totalMistakes
                ).toFixed(1);

                const severityBreakdown = {
                    1: mistakes.filter((m) => m.severity === 1).length,
                    2: mistakes.filter((m) => m.severity === 2).length,
                    3: mistakes.filter((m) => m.severity === 3).length,
                    4: mistakes.filter((m) => m.severity === 4).length,
                    5: mistakes.filter((m) => m.severity === 5).length
                };

                // Most recent mistake
                const mostRecent = mistakes.sort(
                    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
                )[0];

                // Most serious mistake
                const mostSerious = mistakes.sort((a, b) => b.severity - a.severity)[0];

                console.log(chalk.blue.bold('\n📊 Mistake Statistics\n'));

                console.log(chalk.cyan('Overview:'));
                console.log(`  Total Mistakes: ${chalk.yellow(totalMistakes)}`);
                console.log(`  ${chalk.green('✓')} Fixed: ${chalk.green(fixedMistakes)}`);
                console.log(`  ${chalk.red('✗')} Unfixed: ${chalk.red(unfixedMistakes)}`);
                console.log(`  Average Severity: ${chalk.yellow(avgSeverity)} / 5\n`);

                console.log(chalk.cyan('Severity Breakdown:'));
                Object.entries(severityBreakdown).forEach(([level, count]) => {
                    const emoji = getSeverityEmoji(parseInt(level));
                    const percentage = ((count / totalMistakes) * 100).toFixed(0);
                    const bar = '█'.repeat(Math.ceil((count / totalMistakes) * 20));
                    console.log(
                        `  ${emoji} Level ${level}: ${chalk.dim(bar)} ${count} (${percentage}%)`
                    );
                });

                console.log(`\n${chalk.cyan('Most Recent:')}`);
                console.log(
                    `  ${chalk.dim(mostRecent.date)}: ${mostRecent.description.substring(0, 50)}`
                );

                console.log(`\n${chalk.cyan('Most Serious:')}`);
                console.log(
                    `  ${getSeverityEmoji(mostSerious.severity)} Level ${mostSerious.severity}: ${mostSerious.description.substring(0, 50)}`
                );

                console.log();
            } catch (error) {
                console.error(chalk.red('Error generating stats:'), error);
                process.exit(1);
            }
        });
}
