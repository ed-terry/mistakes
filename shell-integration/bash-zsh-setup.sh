# Bash/Zsh Shell Integration for Mistake CLI
# Add these lines to your ~/.bashrc (Bash) or ~/.zshrc (Zsh) file
# This will display a random mistake reminder when you open your terminal

# Get reminded of mistakes on terminal startup
mistake remind --quiet

# Optional: Control reminder frequency
# Uncomment below to remind less frequently (e.g., 50% of the time)
# if [ $((RANDOM % 2)) -eq 0 ]; then
#   mistake remind --quiet
# fi
