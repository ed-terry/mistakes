# 📋 Examples - Learning from your Mistakes

Real-world examples of using Mistake CLI to track and learn from your mistakes.

## Software Development Examples

### Example 1: JavaScript Type Coercion Bug

**Scenario**: You forgot to use strict equality in JavaScript

```bash
$ mistake add

? What mistake did you make?
> Used == instead of === in JavaScript, causing unexpected type coercion

? How serious was this? (1 = Minor, 5 = Critical)
> 4

? What did you learn from it?
> Always use === (strict equality) to prevent type coercion bugs.
> == converts types which can cause bugs like: 0 == "0" returns true

? Have you fixed this mistake?
> Yes

✅ Mistake recorded! Keep learning!
```

### Example 2: Forgotten Semicolons in Python

```bash
$ mistakeadd

? What mistake did you make?
> Forgot to add : at end of if/for/while statements in Python

? How serious was this? (1 = Minor, 5 = Critical)
> 3

? What did you learn from it?
> Python requires colons (:) after control flow statements.
> Good practice: Always add colon immediately after statement keyword.

? Have you fixed this mistake?
> Yes

✅ Mistake recorded! Keep learning!
```

### Example 3: SQL Injection Vulnerability

```bash
$ mistake add

? What mistake did you make?
> Built SQL query using string concatenation instead of prepared statements

? How serious was this? (1 = Minor, 5 = Critical)
> 5

? What did you learn from it?
> Always use parameterized queries/prepared statements to prevent SQL injection.
> Example (Node.js): db.query('SELECT * FROM users WHERE id = ?', [userId])

? Have you fixed this mistake?
> Yes

✅ Mistake recorded! Keep learning!
```

## Spelling & Language Examples

### Example 4: Common Spelling Mistake

```bash
$ mistake add

? What mistake did you make?
> Spelled "accommodate" as "accomodate"

? How serious was this? (1 = Minor, 5 = Critical)
> 2

? What did you learn from it?
> "Accommodate" has double-C and double-M: acCOMModate
> Memory trick: "A room for two Cs and two Ms"

? Have you fixed this mistake?
> No

✅ Mistake recorded! Keep learning!
```

### Example 5: Grammer Mistake

```bash
$ mistake add

? What mistake did you make?
> Used "their" instead of "there" in written communication

? How serious was this? (1 = Minor, 5 = Critical)
> 2

? What did you learn from it?
> Remember: There = location/existence, Their = possession, They're = they are
> Trick: "there" has "here" in it

? Have you fixed this mistake?
> Yes

✅ Mistake recorded! Keep learning!
```

## Life & Work Examples

### Example 6: Time Management Mistake

```bash
$ mistake add

? What mistake did you make?
> Underestimated time needed for project, missed deadline

? How serious was this? (1 = Minor, 5 = Critical)
> 4

? What did you learn from it?
> Always add 25% buffer to time estimates for unexpected issues.
> Use: Original estimate × 1.25 = Realistic deadline

? Have you fixed this mistake?
> No

✅ Mistake recorded! Keep learning!
```

### Example 7: Communication Mistake

```bash
$ mistake add

? What mistake did you make?
> Didn't clarify requirements before starting work, built wrong feature

? How serious was this? (1 = Minor, 5 = Critical)
> 5

? What did you learn from it?
> Always get written confirmation of requirements before starting.
> Create: Requirements doc → Send for approval → Keep as reference

? Have you fixed this mistake?
> Yes

✅ Mistake recorded! Keep learning!
```

## Viewing Your Mistakes

### List All Mistakes

```bash
$ mistake list

📋 Your Mistakes (7 total):

1. 🟠 Used == instead of === in JavaScript
   2024-03-10 | Severity: 4/5 | ✅ FIXED
   📚 Lesson: Always use === (strict equality) to prevent type coercion bugs.

2. 🟡 Forgot to add : at end of if/for/while statements in Python
   2024-03-09 | Severity: 3/5 | ✅ FIXED
   📚 Lesson: Python requires colons (:) after control flow statements

3. 🔴 Built SQL query using string concatenation instead of prepared statements
   2024-03-08 | Severity: 5/5 | ✅ FIXED
   📚 Lesson: Always use parameterized queries/prepared statements

4. 🟡 Spelled "accommodate" as "accomodate"
   2024-03-07 | Severity: 2/5 | ❌ UNFIXED
   📚 Lesson: "Accommodate" has double-C and double-M: acCOMModate

5. 🟡 Used "their" instead of "there"
   2024-03-06 | Severity: 2/5 | ✅ FIXED

6. 🟠 Underestimated time needed for project, missed deadline
   2024-03-05 | Severity: 4/5 | ❌ UNFIXED
   📚 Lesson: Always add 25% buffer to time estimates

7. 🔴 Didn't clarify requirements before starting work
   2024-03-04 | Severity: 5/5 | ✅ FIXED
   📚 Lesson: Create requirements doc → Send for approval → Keep reference
```

### Get a Random Reminder

```bash
$ mistake remind

🔔 REMEMBER THIS MISTAKE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: 2024-03-07
Severity: 🟡 2/5
Mistake: Spelled "accommodate" as "accomodate"
Lesson: "Accommodate" has double-C and double-M: acCOMModate
         Memory trick: "A room for two Cs and two Ms"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### View Statistics

```bash
$ mistake stats

📊 Mistake Statistics

Overview:
  Total Mistakes: 7
  ✓ Fixed: 5
  ✗ Unfixed: 2
  Average Severity: 3.4 / 5

Severity Breakdown:
  🟢 Level 1: 0% (0)
  🟡 Level 2: ██████░░░░░░░░░░░░░ 28% (2)
  🟠 Level 3: ███░░░░░░░░░░░░░░░░░ 14% (1)
  🟠 Level 4: ██████░░░░░░░░░░░░░  28% (2)
  🔴 Level 5: ██████░░░░░░░░░░░░░  28% (2)

Most Recent:
  2024-03-10: Used == instead of === in JavaScript

Most Serious:
  🔴 Level 5: Built SQL query using string concatenation
```

### Search for Specific Mistakes

```bash
$ mistake search "spelling"

🔍 Search Results for "spelling" (1)

1. 2024-03-07
   Spelled "accommodate" as "accomodate"
   📚 "Accommodate" has double-C and double-M: acCOMModate
```

## Workflow Example

### Day 1: During Work

You make a mistake and immediately log it:

```bash
mistake add  #  Add: "Used == instead of ==="
```

### Day 2: Morning Setup

You open your terminal and get reminded:

```bash
$ zsh
🔔 Spelled "accommodate" as "accomodate"
```

This reminder helps you be more careful about that mistake!

### Weekly Review

Every Friday, you check your stats:

```bash
mistake stats
# See which mistakes are most common
# Review your progress
```

### Monthly Reflection

Export and review:

```bash
mistake export csv
# Analyze patterns in your mistakes
# Share learnings with team (optional)
```

---

**Remember**: The goal isn't to shame yourself, but to learn and grow! 🚀
