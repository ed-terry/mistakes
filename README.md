# Mistake CLI - Learn from Every Mistake

## A Personal Origin Story

A few days ago, I met a 73-year-old man who changed how I think about mistakes. He shared with me profound wisdom about life—about pleasure and pain, about how to provide for others regardless of their reaction or appreciation. But the lesson that stayed with me most was a story his father once told him:

*"When life gets hard and you feel overwhelmed and angry, look at the direction where the sun rises. It's there, smiling at you. Regardless of the day, it's always up there. You wake up, brush your teeth, wash your face. You already have breakfast made. You go to school to learn and play with your friends. It's all because someone woke up, made breakfast for you, washed your clothes. The same way the sun rose to smile at you. And one day, you will have to be the sun."*

This story transformed how I see my own mistakes. I realized that mistakes aren't failures to hide from—they're lessons to learn from so I don't repeat them. They're part of becoming the sun for others. That's why I built this tool. Not to dwell on what went wrong, but to remember, learn, and grow into someone who can help light the way for others.

## What is Mistake CLI?

A powerful command-line tool to journal your mistakes and get reminded of them whenever you open a terminal. It's your personal learning companion, helping you transform errors into wisdom.

## Features

**Core Capabilities:**
- Journal your mistakes with detailed descriptions and severity levels
- Get reminded of random mistakes when you open your terminal
- List all your mistakes or filter by specific dates
- Search mistakes by keywords to find related lessons
- View statistics and insights about your learning patterns
- Easy setup and configuration for any shell
- Cross-platform support (Windows, macOS, Linux)
- Export mistakes to JSON/CSV for backup or analysis

**Coming Soon:**
- Tag-based organization for related mistakes
- Mistake streaks and consistency tracking
- Advanced statistics with charts and graphs
- A clock-based visualization where you can set pins on areas of learning interest (inspired by a memory of an antique clock that lit up minerals in different locations—this will help you see patterns in where your growth opportunities are)

## Installation

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Global Installation
```bash
npm install -g mistake-cli
# or
git clone https://github.com/ed-terry/mistake-cli.git
cd mistake-cli
npm install
npm run build
npm link
```

## Quick Start

### Add a Mistake
```bash
mistake add
# Then follow the prompts to describe your mistake
```

### Get a Random Reminder
```bash
mistake remind
# Shows a random mistake you should remember
```

### List All Mistakes
```bash
mistake list
# Shows all recorded mistakes with dates
```

### Filter by Date
```bash
mistake list --date 2024-03-10
# Shows all mistakes from March 10, 2024
```

### Search Mistakes
```bash
mistake search "keyword"
# Searches all mistakes for matching content
```

### View Statistics
```bash
mistake stats
# Shows insights about your mistakes
```

## Setup & Configuration

### Initial Setup
```bash
mistake setup
```
This will guide you through:
- Choosing your preferred shell (bash, zsh, powershell, cmd)
- Setting up automatic reminders on terminal startup
- Configuring reminder frequency

### Shell Integration

**For Bash/Zsh** - Add to your `~/.bashrc` or `~/.zshrc`:
```bash
# Get reminded of a mistake on terminal startup
mistake remind --quiet
```

**For PowerShell** - Add to your `$PROFILE`:
```powershell
# Get reminded of a mistake on terminal startup
mistake remind --quiet
```

## Usage Examples

### Example 1: Adding a Mistake
```
$ mistake add

? What mistake did you make?
> I was writing "accommodation" wrong as "acomodation"

? How serious was this? (1-5)
> 4

? What did you learn from it?
> Need to memorize double 'c' and double 'm' in accommodation

✅ Mistake recorded! Keep learning!
```

### Example 2: Random Reminder
```
$ mistake remind

Remember This Mistake:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: March 5, 2024
Mistake: I kept using '===' instead of '==' in bash conditions
Severity: 3/5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Example 3: List Mistakes from a Specific Date
```
$ mistake list --date 2024-03

Mistakes from March 2024:
1. I was writing "accommodation" wrong (2024-03-10)
2. Used var instead of const (2024-03-12)
3. Forgot to close file handle (2024-03-15)
```

## Command Reference

```
mistake <command> [options]

Commands:
  add         Add a new mistake to your journal
  list        List all mistakes or filter by date
  search      Search mistakes by keyword
  remind      Get reminded of a random past mistake
  stats       Show statistics about your mistakes
  setup       Configure terminal integration
  reset       Clear all mistakes (with confirmation)
  export      Export mistakes to JSON or CSV
  help        Show help information

Options:
  --date      Filter by date (YYYY-MM or YYYY-MM-DD)
  --quiet     Minimal output (useful for startup reminders)
  --format    Output format (json, csv, table)
  -h, --help  Show help
  -v, --version Show version
```

## Data Storage

Mistakes are stored locally in JSON format at:
- **Windows**: `%APPDATA%\mistake-cli\mistakes.json`
- **macOS/Linux**: `~/.mistake-cli/mistakes.json`

Your data is completely private and never sent anywhere.

## Configuration File

Created at `~/.mistake-cli/config.json`:
```json
{
  "shell": "bash",
  "remindOnStartup": true,
  "remindFrequency": 100,
  "theme": "default"
}
```

## Contributing

Found a bug? Want to suggest a feature? Please open an issue or submit a PR!

GitHub: https://github.com/ed-terry/mistake-cli

## Support

If you find this tool helpful, consider supporting the project:

https://buymeacoffee.com/edwardterry

## License

MIT © Edward Terry

## Author

**Edward Terry**
- Portfolio: [ed-terry.github.io](https://ed-terry.github.io)
- GitHub: [@ed-terry](https://github.com/ed-terry)
- Email: [sir_edward@icloud.com](mailto:sir_edward@icloud.com)
- Support: [Buy Me A Coffee](https://buymeacoffee.com/edwardterry)

---

**Remember:** Every mistake is a learning opportunity, and every lesson learned is a step toward becoming someone's sun.
