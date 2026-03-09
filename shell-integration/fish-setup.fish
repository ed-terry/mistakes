# Fish Shell Integration for Mistake CLI
# Add these lines to your ~/.config/fish/config.fish file
# This will display a random mistake reminder when you open your terminal

# Get reminded of mistakes on terminal startup
mistake remind --quiet

# Optional: Control reminder frequency
# Uncomment below to remind less frequently (e.g., 50% of the time)
# if test (random) -lt 16384
#   mistake remind --quiet
# end
