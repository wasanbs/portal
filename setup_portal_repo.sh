#!/bin/bash
echo "--- Setting up new 'portal' repository ---"
echo ""

# Cleanup old .git directory to ensure a completely fresh start
if [ -d ".git" ]; then
    echo "Removing old .git directory..."
    rm -rf .git
fi

# 1. Initialize a new Git repository and name the default branch 'main'
echo "Step 1: Initializing a new Git repository on branch 'main'..."
git init -b main
echo ""

# 2. Add all current files to the repository
echo "Step 2: Adding all project files to the repository..."
git add .
echo ""

# 3. Create the first commit
echo "Step 3: Creating the first commit..."
git commit -m "Initial commit for portal project"
echo ""

# 4. Add the new remote repository URL
echo "Step 4: Connecting to your new 'portal' repository on GitHub..."
git remote add origin https://github.com/wasanbs/portal.git
echo ""

echo "--- SETUP COMPLETE ---"
echo ""
echo "The repository is now ready."
echo "To push your code to GitHub, please run the following command in your terminal:"
echo ""
echo "git push -u origin main --force"
echo ""
echo "This command SHOULD and WILL ask for your Username and Password."
echo "For the Password, please use a new Personal Access Token (PAT) from GitHub."
