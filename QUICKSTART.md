# QUICKSTART GUIDE for Mistake CLI

# Learn how to use the mistake journaling tool

## Installation

```bash
npm install -g mistake-cli
# or
npm install -g c:\Users\Edward\Source\mistake
```

Once installed, you can use the `mistake` command from anywhere in your terminal.

## Basic Commands

### 1. Add a Mistake

The simplest way to start using Mistake is to journal your mistakes:

```bash
mistake add
```

This will prompt you with questions:

- **What mistake did you make?** - Describe the error or wrong action
- **How serious was this? (1 = Minor, 5 = Critical)** - Rate the severity
- **What did you learn from it?** (optional) - Record the lesson
- **Have you fixed this mistake?** - Mark it as resolved or not

### 2. Get a Random Reminder

See a random mistake from your history to remind you of what to avoid:

```bash
mistake remind
```

For quieter output (terminal startup):

```bash
mistake remind --quiet
```

### 3. List All Your Mistakes

View all mistakes you've recorded:

```bash
mistake list
```

#### Filter your mistakes:

**By date:**

```bash
mistake list --date 2024-03
# Shows all mistakes from March 2024

mistake list --date 2024-03-10
# Shows all mistakes from March 10, 2024
```

**By status:**

```bash
mistake list --fixed
# Only fixed mistakes

mistake list --unfixed
# Only unfixed mistakes
```

**By sort:**

```bash
mistake list --sort severity
# Sort by severity (most serious first)
```

### 4. Search Your Mistakes

Find mistakes by keyword:

```bash
mistake search "spelling"
# Finds all mistakes containing "spelling"

mistake search "database"
# Find database-related mistakes
```

### 5. View Statistics

See insights about your mistakes:

```bash
mistake stats
```

Shows:

- Total mistakes logged
- Number fixed vs unfixed
- Average severity
- Severity breakdown (histogram)
- Most recent and most serious mistakes

### 6. Delete Mistakes

Remove a specific mistake:

```bash
mistake delete <mistake-id>
```

Or delete all (with confirmation):

```bash
mistake delete --all
```

### 7. Export Your Data

Backup or share your mistakes:

```bash
mistake export
# Creates mistakes-YYYY-MM-DD.json

mistake export csv
# Creates mistakes-YYYY-MM-DD.csv

mistake export --out my-mistakes.json
# Custom filename
```

### 8. Setup & Configuration

Configure terminal integration:

```bash
mistake setup
```

This walks you through:

- Selecting your shell (bash, zsh, fish, PowerShell)
- Setting up automatic reminder on startup
- Choosing reminder frequency

## Examples

### Example: Learning from a Spelling Mistake

```
$ mistake add

? What mistake did you make?
> I wrote "accommodation" as "acomodation"

? How serious was this? (1 = Minor, 5 = Critical)
> 2

? What did you learn from it?
> Need to memorize double-c and double-m: acCOMModation

? Have you fixed this mistake?
> Yes

✅ Mistake recorded! Keep learning!
```

### Example: Track a Code Mistake

```
$ mistake add

? What mistake did you make?
> Used '==' instead of '===' in JavaScript condition

? How serious was this? (1 = Minor, 5 = Critical)
> 4

? What did you learn from it?
> Always use strict equality (===) in JavaScript to avoid type coercion bugs

? Have you fixed this mistake?
> Yes (updated code to use ===)

✅ Mistake recorded! Keep learning!
```

### Example: Getting Reminded

```
$ mistake remind

🔔 REMEMBER THIS MISTAKE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: 2024-03-10
Severity: 4/5
Mistake: Used '==='  instead of '===' in JavaScript condition
Lesson: Always use strict equality (===) in JavaScript to avoid type coercion bugs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Setting Up Automatic Reminders

### Bash/Zsh

Add to `~/.bashrc` or `~/.zshrc`:

```bash
mistake remind --quiet
```

Then reload:

```bash
source ~/.bashrc  # or source ~/.zshrc
```

### Fish

Add to `~/.config/fish/config.fish`:

```fish
mistake remind --quiet
```

### PowerShell

Add to your `$PROFILE`:

```powershell
PowerShell -NoExit -Command "mistake remind --quiet"
```

Find your profile location:

```powershell
$PROFILE
```

## Files & Storage

Your mistakes are stored locally in JSON format:

- **Windows**: `%APPDATA%\mistake-cli\mistakes.json`
- **macOS/Linux**: `~/.mistake-cli/mistakes.json`

Your data is **100% private** and never sent anywhere.

## Tips & Tricks

1. **Use specific descriptions** - The more detail, the more helpful the reminder
2. **Log mistakes immediately** - While it's fresh in your mind
3. **Tag similar mistakes** - Helps you notice patterns
4. **Review regularly** - Use `stats` to see progress
5. **Export backups** - Keep clean backups of your learning history
6. **Share lessons** - You can export and share lessons with your team

## Need Help?

```bash
# Get full command help
mistake --help

# Get help for a specific command
mistake add --help
mistake list --help
mistake remind --help
```

## Author & Support

**Edward Terry**

- Portfolio: [ed-terry.github.io](https://ed-terry.github.io)
- GitHub: [@ed-terry](https://github.com/ed-terry)
- Email: [sir_edward@icloud.com](mailto:sir_edward@icloud.com)
- Buy me a coffee: [buymeacoffee.com/edwardterry](https://buymeacoffee.com/edwardterry)

---

**Remember**: Every mistake is a learning opportunity! 🚀
