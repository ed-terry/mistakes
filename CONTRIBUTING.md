# Contributing to Mistake CLI

Thank you for being interested in contributing! Here's how you can help improve this project.

## Development Setup

### Clone and Install

```bash
git clone https://github.com/ed-terry/mistake-cli.git
cd mistake-cli
npm install
npm run build
```

### Build & Develop

```bash
# Build TypeScript
npm run build

# Run in development (using ts-node)
npm run dev

# Built version
node dist/index.js
```

## Project Structure

```
src/
├── index.ts              # CLI entry point
├── commands/             # Command implementations
│   ├── add.ts           # Add new mistake
│   ├── list.ts          # List mistakes
│   ├── remind.ts        # Get random reminder
│   ├── search.ts        # Search mistakes
│   ├── setup.ts         # Configure terminal integration
│   ├── stats.ts         # Show statistics
│   ├── delete.ts        # Delete mistakes
│   └── export.ts        # Export to JSON/CSV
└── utils/
    ├── storage.ts       # File I/O and config management
    └── helpers.ts       # Date formatting, utilities
```

## Adding a New Feature

### 1. Create a new command

Create `src/commands/mycommand.ts`:

```typescript
import { Command } from "commander";
import chalk from "chalk";

export function mycommandCommand(program: Command): void {
  program
    .command("mycommand")
    .description("What this command does")
    .option("--option <value>", "Description")
    .action((options: any) => {
      try {
        // Your implementation here
      } catch (error) {
        console.error(chalk.red("Error:"), error);
        process.exit(1);
      }
    });
}
```

### 2. Register the command

Add to `src/index.ts`:

```typescript
import { mycommandCommand } from "./commands/mycommand";

// Then in the program setup:
mycommandCommand(program);
```

### 3. Build and test

```bash
npm run build
node dist/index.js mycommand --help
```

## Code Style

- Use TypeScript for type safety
- Use chalk for colored output
- Handle errors gracefully
- Add @ts-ignore only when necessary
- Use meaningful variable names

## Testing

Currently using manual testing. To test your changes:

```bash
npm run build
node dist/index.js add     # Test add command
node dist/index.js list    # Test list command
```

## Reporting Issues

When reporting bugs, please include:

- OS and shell (bash, powershell, etc.)
- The command that caused the issue
- Expected vs actual behavior
- Error messages if applicable

## Feature Requests

Ideas for new features? Feel free to open an issue describing:

- What would you like to do?
- Why would this be useful?
- Any implementation ideas?

## Future Enhancements

Consider working on:

- [ ] SQLite backend for better query support
- [ ] Web UI for viewing mistakes
- [ ] Mobile app companion
- [ ] Cloud sync (optional, privacy-first)
- [ ] Mistake categories/templates
- [ ] Scheduled reminders
- [ ] Team/shared mistake database
- [ ] AI-powered mistake classification
- [ ] Integration with Git commits
- [ ] Mistake streaks & gamification

## License

This project is MIT licensed.

## Questions?

Open an issue on [GitHub](https://github.com/ed-terry/mistake-cli) or email [sir_edward@icloud.com](mailto:sir_edward@icloud.com)

Thanks for contributing! 🚀
