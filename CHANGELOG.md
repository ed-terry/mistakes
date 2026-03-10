# 🎯 Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-03-10

### Added

- **Core CLI** - Full command-line interface for managing mistakes
- **Commands**:
  - `add` - Log a new mistake with severity and lessons learned
  - `list` - View all mistakes with filtering/sorting options
  - `remind` - Get a random mistake reminder
  - `search` - Find mistakes by keyword
  - `stats` - View statistics and insights
  - `setup` - Configure terminal integration
  - `delete` - Remove mistakes
  - `export` - Export to JSON or CSV
- **Storage** - Local JSON-based persistence (~/.mistake-cli/)
- **Cross-platform** - Support for Windows, macOS, and Linux
- **Shell Integration** - Auto-reminder on terminal startup (bash, zsh, fish, PowerShell)
- **Configuration** - Customizable settings and preferences
- **Color Output** - Beautiful CLI with chalk colors
- **Error Handling** - Graceful error messages and recovery
- **Documentation** - Comprehensive README and QUICKSTART guides

### Features
- Track mistakes with severity levels (1-5)
- Record lessons learned from mistakes
- Mark mistakes as fixed
- Filter/sort mistakes by date, severity, status
- Search across all mistakes
- View statistics (total, fixed/unfixed, average severity)
- Export mistakes for backup or sharing
- Automatic terminal reminders
- Beautiful colored output

## [Future Versions]

### Planned for v1.1

- [ ] Tag system for organizing mistakes
- [ ] Mistake streaks (consecutive days without same mistake)
- [ ] Improved statistics with charts
- [ ] Scheduled reminders (daily, weekly, etc.)
- [ ] Web dashboard (optional)

### Planned for v2.0

- [ ] SQLite backend option
- [ ] Multiple profile support
- [ ] Team/shared mistake database
- [ ] Cloud sync (privacy-first)
- [ ] Mobile companion app
- [ ] AI analysis of mistake patterns

### Under Consideration

- [ ] Git commit integration (log mistakes from commits)
- [ ] IDEs/Editor extensions
- [ ] Slack integration
- [ ] Browser extension
- [ ] Machine learning insights
- [ ] Gamification elements
- [ ] Privacy-first cloud backup

---

## Version Numbering

We follow [Semantic Versioning]:

- **MAJOR** version when introducing breaking changes
- **MINOR** version when adding features (backwards compatible)
- **PATCH** version for bug fixes

---

## Attribution

**Created by**: Edward Terry  
**Website**: [ed-terry.github.io](https://ed-terry.github.io)  
**GitHub**: [@ed-terry](https://github.com/ed-terry)

---

**Every mistake is a learning opportunity!** 
