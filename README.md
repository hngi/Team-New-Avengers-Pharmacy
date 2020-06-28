# Team-New-Avengers-Pharmacy

Please, ensure you work from your develop branch, and create all pull requests to develop branch. This is to ensure you do not experience conflicts issues when creating pull requests. Any pull request made to the master branch will be closed.
On cloning the repo, you should immediately add this main repository as your upstream remote.

```sh
git remote add upstream https://github.com/hngi/Team-New-Avengers-Pharmacy.git
```

##tips

- Use git branch to see the branch you are currently working on.
- After you git clone repo, you should immediately switch to the develop branch (git checkout develop)
- If for example you want to work on variation-two, write your html into the variation-two.html in the variation-two directory. Populate the variation-two.css and variation-two.js files in the /src directory with your style and javascript code. Your media files should go into the assets folder.
- Pull changes from upstream before you PR

```sh
git pull upstream develop
```

###PR / Task Submission

```sh
git push origin develop
```

- You must attach your clubhouse ticket link and live working URL (either hosted on Netlify, Zeit, GitHub pages or any other which suits your fancy) to your PR unless it won't be merged and your PR would be closed
