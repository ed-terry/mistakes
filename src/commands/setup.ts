import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { saveConfig, getDefaultConfig } from '../utils/storage';

export function setupCommand(program: Command): void {
    program
        .command('setup')
        .description('Configure terminal integration and preferences')
        .action(async () => {
            try {
                console.log(chalk.blue.bold('\n⚙️  Mistake CLI Setup\n'));

                const answers = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'shell',
                        message: chalk.cyan('Which shell do you use?'),
                        choices: [
                            { name: 'Bash', value: 'bash' },
                            { name: 'Zsh', value: 'zsh' },
                            { name: 'PowerShell (Windows)', value: 'powershell' },
                            { name: 'Command Prompt (Windows)', value: 'cmd' },
                            { name: 'Fish', value: 'fish' }
                        ]
                    },
                    {
                        type: 'confirm',
                        name: 'remindOnStartup',
                        message: chalk.cyan('Get reminded of a mistake when you open your terminal?'),
                        default: true
                    },
                    {
                        type: 'list',
                        name: 'remindFrequency',
                        message: chalk.cyan('How often should you be reminded?'),
                        choices: [
                            { name: 'Always (100%)', value: 100 },
                            { name: 'Most times (75%)', value: 75 },
                            { name: 'Sometimes (50%)', value: 50 },
                            { name: 'Rarely (25%)', value: 25 },
                            { name: 'Very rarely (10%)', value: 10 }
                        ]
                    }
                ]);

                const config = {
                    ...getDefaultConfig(),
                    ...answers
                };

                saveConfig(config);

                console.log(chalk.green.bold('\n✅ Setup complete!\n'));

                // Show shell-specific instructions
                if (config.remindOnStartup) {
                    showShellInstructions(config.shell);
                }
            } catch (error) {
                console.error(chalk.red('Error during setup:'), error);
                process.exit(1);
            }
        });
}

function showShellInstructions(shell: string): void {
    const bashZshCmd = "mistake remind --quiet";
    const powershellCmd = "mistake remind --quiet";

    console.log(chalk.cyan.bold('\n📝 Shell Integration Instructions\n'));

    switch (shell) {
        case 'bash':
            console.log(chalk.white('Add this line to your ~/.bashrc file:\n'));
            console.log(chalk.gray(`# Get reminded of mistakes on startup`));
            console.log(chalk.yellow(bashZshCmd));
            console.log(
                chalk.dim(
                    '\nThen run: source ~/.bashrc'
                )
            );
            break;

        case 'zsh':
            console.log(chalk.white('Add this line to your ~/.zshrc file:\n'));
            console.log(chalk.gray(`# Get reminded of mistakes on startup`));
            console.log(chalk.yellow(bashZshCmd));
            console.log(
                chalk.dim(
                    '\nThen run: source ~/.zshrc'
                )
            );
            break;

        case 'fish':
            console.log(chalk.white('Add this to ~/.config/fish/config.fish:\n'));
            console.log(chalk.gray(`# Get reminded of mistakes on startup`));
            console.log(chalk.yellow(`mistake remind --quiet`));
            break;

        case 'powershell':
            console.log(chalk.white('Add this to your PowerShell profile:\n'));
            console.log(chalk.gray(`# Get reminded of mistakes on startup`));
            console.log(chalk.yellow(powershellCmd));
            console.log(
                chalk.dim('\nTo edit profile, run: notepad $PROFILE')
            );
            break;

        case 'cmd':
            console.log(chalk.white('Windows Command Prompt integration:\n'));
            console.log(chalk.dim('CMD does not support startup scripts natively.'));
            console.log(chalk.dim('Consider using PowerShell instead (use "mistake setup" again)'));
            console.log(
                chalk.dim('\nOr manually run "mistake remind" when needed.')
            );
            break;
    }

    console.log();
}
