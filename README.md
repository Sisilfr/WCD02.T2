Step by step guiding to push the repository to Github 
### 1. **Create a New Directory and Initialize it as a Git Repository**

1. **Create a new directory**:
   Open a terminal (command prompt or Git Bash) and run the following command to create and navigate to a new directory:
   ```bash
   mkdir my-new-project
   cd my-new-project
   
2. **Initialize the Git repository**:
   ```bash
   git init
   This will create a .git folder inside your project, marking it as a Git repository.
3. **Create files**
   ```bash
   echo "console.log("Hello, Git!");" > index.js
4. **Check The Status**
   ```bash
   git status
5. **Stage and commit the files**
   ```bash
   git commit -m "Initial commit: Add index.js"

## 2. Make changes and push to Github
1. **Connect to GitHub**
   Do no initialize it with readme, beacuse you already have one
2. **add GitHub remote to your local repository**
  ```bash
git remote add origin git remote add origin https://github.com/Sisilfr/WCD02.T2.git
3. **push to github**
  ```bash
  git push -u origin main
4. **Use origin master**
  ```bash
  git push -u origin master
4. Create a New Branch and Make Changes


## **3. Create a new branch:**

1. **Create a new branch for feature development or changes:**
  ```bash
  git checkout -b new-feature

2. **Make changes inside the new branch:**
- Open the index.js file (or create a new file) and make some changes.
Example: Modify index.js to print a different message.
  ```bash
  console.log("Hello, GitHub!");

3. **Stage and commit changes:**
After making changes, stage and commit them:
  ```bash
  git add index.js
  git commit -m "Updated index.js to print Hello, GitHub"

4. **Push the new branch to GitHub:**
Push the new branch to GitHub:
  ```bash
git push origin new-feature

5. **Switch Between Branches and Review Changes**
Switch back to the main branch:
```bash
  git checkout main

6. **Switch back to the new branch:**
To go back to the new-feature branch:
```bash
  git checkout new-feature

## 6. Make a Pull Request on GitHub
1. Go to GitHub and navigate to your repository.
2. Create a Pull Request:
- GitHub will automatically suggest creating a pull request when you push a branch.
- Click the Compare & pull request button.
- Add a title and description for your pull request.
- Click Create pull request.

##7. Review and Merge the Pull Request
1. Review the pull request:
- Review the changes you made in the pull request.
- If everything looks good, you can merge it.
2. Merge the pull request:
- Click Merge pull request to merge the changes into the main branch.
- After merging, you can delete the branch (optional) by clicking Delete branch on GitHub.
8. Delete Local Branch (Optional)
- If you no longer need the new-feature branch locally, you can delete it using:
```bash
  git branch -d new-feature
