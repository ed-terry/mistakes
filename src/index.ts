#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { addCommand } from './commands/add';
import { listCommand } from './commands/list';
import { remindCommand } from './commands/remind';
import { searchCommand } from './commands/search';
import { setupCommand } from './commands/setup';
import { statsCommand } from './commands/stats';
import { deleteCommand } from './commands/delete';
import { exportCommand } from './commands/export';

const program = new Command();

// Banner
if (process.argv.includes('--help') || process.argv.length === 2) {
  console.log(chalk.blue.bold('\n📝 Mistake CLI - Learn from Every Mistake!\n'));
}

program
  .name('mistake')
  .description('Journal your mistakes and get reminded of them')
  .version('1.0.0', '-v, --version')
  .usage('<command> [options]');

// Register commands
addCommand(program);
listCommand(program);
remindCommand(program);
searchCommand(program);
setupCommand(program);
statsCommand(program);
deleteCommand(program);
exportCommand(program);

// Default action
program.action(() => {
  if (process.argv.length < 3) {
    console.log(chalk.cyan('\n💡 Use: mistake <command> [options]'));
    console.log(chalk.cyan('Try: mistake --help\n'));
  }
});

program.parse(process.argv);
