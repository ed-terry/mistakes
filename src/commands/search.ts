import { Command } from 'commander';
import chalk from 'chalk';
import { loadMistakes } from '../utils/storage';
import { truncate } from '../utils/helpers';

export function searchCommand(program: Command): void {
    program
        .command('search <keyword>')
        .description('Search mistakes by keyword')
        .action((keyword: string) => {
            try {
                const mistakes = loadMistakes();

                if (mistakes.length === 0) {
                    console.log(chalk.yellow('\n📭 No mistakes logged yet!\n'));
                    return;
                }

                const lowerKeyword = keyword.toLowerCase();
                const filtered = mistakes.filter(
                    (m) =>
                        m.description.toLowerCase().includes(lowerKeyword) ||
                        (m.lesson && m.lesson.toLowerCase().includes(lowerKeyword))
                );

                if (filtered.length === 0) {
                    console.log(
                        chalk.yellow(`\n❌ No mistakes found containing "${keyword}"\n`)
                    );
                    return;
                }

                // Sort by date (newest first)
                filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

                console.log(
                    chalk.blue.bold(`\n🔍 Search Results for "${keyword}" (${filtered.length})\n`)
                );

                filtered.forEach((mistake, index) => {
                    console.log(`${chalk.dim(`${index + 1}.`)} ${chalk.cyan(mistake.date)}`);
                    console.log(
                        `   ${chalk.white(truncate(mistake.description, 70))}`
                    );
                    if (mistake.lesson) {
                        console.log(
                            `   ${chalk.dim('📚 ' + truncate(mistake.lesson, 65))}`
                        );
                    }
                    console.log();
                });
            } catch (error) {
                console.error(chalk.red('Error searching mistakes:'), error);
                process.exit(1);
            }
        });
}
