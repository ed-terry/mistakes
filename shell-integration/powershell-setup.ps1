# PowerShell Integration for Mistake CLI  
# Add these lines to your PowerShell $PROFILE file
# This will display a random mistake reminder when you open your terminal

# Get reminded of mistakes on terminal startup
mistake remind --quiet

# Optional: Control reminder frequency (50% of the time)
# if ((Get-Random -Maximum 2) -eq 0) {
#   mistake remind --quiet
# }
