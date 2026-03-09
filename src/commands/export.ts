import { Command } from 'commander';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { loadMistakes } from '../utils/storage';

export function exportCommand(program: Command): void {
    program
        .command('export [format]')
        .option('--out <file>', 'Output file path')
        .description('Export mistakes to JSON or CSV (json | csv)')
        .action((format: string = 'json', options: any) => {
            try {
                const mistakes = loadMistakes();

                if (mistakes.length === 0) {
                    console.log(chalk.yellow('\n📭 No mistakes to export!\n'));
                    return;
                }

                const timestamp = new Date().toISOString().split('T')[0];
                const fileName = options.out || `mistakes-${timestamp}.${format === 'csv' ? 'csv' : 'json'}`;

                let content: string;

                if (format === 'csv') {
                    content = exportToCSV(mistakes);
                } else {
                    content = exportToJSON(mistakes);
                }

                fs.writeFileSync(fileName, content, 'utf-8');

                console.log(
                    chalk.green.bold(`\n✅ Exported ${mistakes.length} mistake(s) to ${chalk.cyan(fileName)}\n`)
                );
            } catch (error) {
                console.error(chalk.red('Error exporting mistakes:'), error);
                process.exit(1);
            }
        });
}

function exportToJSON(mistakes: any[]): string {
    return JSON.stringify(mistakes, null, 2);
}

function exportToCSV(mistakes: any[]): string {
    const headers = ['Date', 'Severity', 'Description', 'Lesson', 'Fixed'];
    const rows = mistakes.map((m) => [
        m.date,
        m.severity,
        `"${m.description.replace(/"/g, '""')}"`,
        `"${(m.lesson || '').replace(/"/g, '""')}"`,
        m.fixed ? 'Yes' : 'No'
    ]);

    return [headers, ...rows].map((row) => row.join(',')).join('\n');
}
